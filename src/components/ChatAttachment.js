import React, { Component } from 'react';
import Files from 'react-files';
import axios from 'axios';
import Blob from 'blob';

class ChatAttachment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
  }

  onFilesChange = (files) => {
    this.setState({
      files
    })
  }

  onFilesError = (error, file) => {
    console.log('error code ' + error.code + ': ' + error.message)
  }

  filesRemoveOne = (file) => {
    this.refs.files.removeFile(file)
  }

  filesRemoveAll = () => {
    this.refs.files.removeFiles()
  }

  filesUpload = () => {
    const formData = new FormData()
    Object.keys(this.state.files).forEach((key) => {
      const file = this.state.files[key]
      formData.append(key, new Blob([file], { type: file.type }), file.name || 'file')
    })

    axios.post(`/files`, formData)
      .then(response => window.alert(`${this.state.files.length} files uploaded succesfully!`))
      .catch(err => window.alert('Error uploading files :('))
  }

  render() {
    return (
      <div>
        <Files
          ref='files'
          className='files-dropzone-list'
          style={{ height: '100px' }}
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          multiple
          maxFiles={5}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Add up to 5 files
            </Files>
        {
          this.state.files.length > 0
            ? <div className='files-list'>
              <ul>{this.state.files.map((file) =>
                <li className='files-list-item' key={file.id}>
                  <div className='files-list-item-preview'>
                    {file.preview.type === 'image'
                      ? <img className='files-list-item-preview-image' alt='chat icon' src={file.preview.url} />
                      : <div className='files-list-item-preview-extension'>{file.extension}</div>}
                  </div>
                  <div className='files-list-item-content'>
                    <div className='files-list-item-content-item files-list-item-content-item-1'>{file.name}</div>
                    <div className='files-list-item-content-item files-list-item-content-item-2'>{file.sizeReadable}</div>
                  </div>
                  <div
                    id={file.id}
                    className='files-list-item-remove'
                    onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
                  ><i class="fas fa-times"></i></div>
                </li>
              )}</ul>
            </div>
            : null
        }
      </div>
    )
  }
}

export default ChatAttachment;