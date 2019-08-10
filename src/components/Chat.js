import React, { Component } from 'react';
import ChatAttachment from './ChatAttachment'

class Chat extends Component {
  state = {
    showChat: false,
    email: '',
    message: '',
    emailError: false,
    messageError: false,
    submittedCorrectly: false
  }
  errorsMessage = {
    email: 'Wrong email format!',
    message: 'Your message must be at least 16 characters long!'
  }
  static sender = 'sender@example.com';

  handleShowChat = () => {
    if (this.state.showChat) {
      this.setState({
        email: '',
        message: '',
        emailError: false,
        messageError: false,
        submittedCorrectly: false
      })
    }
    this.setState({
      showChat: !this.state.showChat
    })
  }
  handleChatInputs = e => {
    const name = e.target.name
    const value = e.target.value
    if (name === 'email') {
      if (!value.includes('@') || !value) {
        document.getElementById('chatEmailInput').style.borderColor = 'rgb(207, 15, 15)';
        this.setState({
          emailError: true,
        })
      } else {
        document.getElementById('chatEmailInput').style.borderColor = 'rgb(107, 94, 94)';
        this.setState({
          emailError: false,
        })
      }
      this.setState({
        email: value
      })
    } else if (name === 'message') {
      if (value.length < 16 || !value) {
        document.getElementById('chatMessageInput').style.borderColor = 'rgb(207, 15, 15)';
        this.setState({
          messageError: true
        })
      } else {
        document.getElementById('chatMessageInput').style.borderColor = 'rgb(107, 94, 94)';
        this.setState({
          messageError: false
        })
      }
      this.setState({
        message: value
      })
    }
  }

  handleSubmitChat = event => {
    event.preventDefault();
    if (this.state.emailError || this.state.messageError || (!this.state.message || !this.state.email)) {
      return
    }
    const temp = 'contact_template'
    this.sendFeedback(
      temp,
      this.sender,
      this.state.email,
      this.state.message
    );

  }

  sendFeedback(templateId, senderEmail, name, feedback) {
    const receiv = 'donatelek92@gmail.com'
    const temp = 'contact_template'
    window.emailjs
      .send('mailgun', temp, {
        senderEmail,
        receiv,
        name,
        feedback
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            submittedCorrectly: true
          })
          setTimeout(() => {
            this.setState({
              submittedCorrectly: false
            })
          }, 3000)
        }
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
      <div className="chatWrapper">
        {!this.state.showChat ? <div className="chat" onClick={this.handleShowChat} >
          <div className="container">
            <div className="support">Chat</div>
            <div className="supportIcon"><i className="far fa-comment"></i></div>
          </div>
        </div> : <div className="chatForm">
            <h1>Send Us a Message</h1>
            <div className="chatFormWrap">
              <label htmlFor="">E-mail Address</label>
              <br />
              <input type="text" spellCheck={false} name='email' id='chatEmailInput' value={this.state.email} onChange={this.handleChatInputs} />
              {this.state.emailError && <div className="emailError">{this.errorsMessage.email}</div>}
              {/* <br /> */}
              <label htmlFor="">How can we help you?</label>
              <br />
              <textarea name="message" spellCheck={false} id='chatMessageInput' value={this.state.message} cols="30" rows="10" onChange={this.handleChatInputs} ></textarea>
              {this.state.messageError && <div className="messageError">{this.errorsMessage.message}</div>}
              <br />
              <label htmlFor="">Attachment</label>
              <br />
              <ChatAttachment />
              <br />
            </div>
            <div className="buttonWrapper">
              <button className="cancel" onClick={this.handleShowChat} >Cancel</button>
              <button className="sendChatFrom" onClick={this.handleSubmitChat} >Send</button>
              {this.state.submittedCorrectly && <div className="messageSent">Message Has Been Sent!</div>}
            </div>
          </div>}
      </div>
    )
  }
}

export default Chat;