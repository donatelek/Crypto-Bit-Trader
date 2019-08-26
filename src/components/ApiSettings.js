import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

class ApiSettings extends Component {
    state = {
        apiKey: '',
        apiSecret: '',
        apiKeyError: false,
        apiSecretError: false,
        respMessage: ''
    }
    errors = {
        apiKey: 'Wrong Api Key',
        apiSecret: 'Wrong Api Secret'
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'apiKey') {
            this.setState({
                apiKey: value
            })
        } else if (name === 'apiSecret') {
            this.setState({
                apiSecret: value
            })
        }
    }
    handleSubmit = () => {
        const { apiKey, apiSecret } = this.state
        let error = false
        if (apiKey.length !== 24) {
            this.apiKeyInput.style.borderColor = 'red'
            error = true
            this.setState({
                apiKeyError: true
            })
        }
        if (apiSecret.length !== 48) {
            this.apiSecretInput.style.borderColor = 'red'
            error = true
            this.setState({
                apiSecretError: true
            })
        }
        if (error) {
            return
        }
        fetch('https://crypto-tool-server.herokuapp.com/saveapi', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                apiKey,
                apiSecret,
                email: this.props.user
            })
        }).then(res => res.json())
            .then(res => {
                this.props.handleSaveApi(apiKey, apiSecret)
                this.setState({
                    respMessage: res.message,
                    apiKeyError: false,
                    apiSecretError: false,
                    apiKey: '',
                    apiSecret: '',
                })
                // this.apiKeyInput.style.borderColor = 'white'
                // this.apiSecretInput.style.borderColor = 'white'
            })

    }
    render() {
        return (
            <>
                {!this.props.apiKey && !this.props.apiSecret ? <div className='apiSettings'>
                    <h1>Api Settings</h1>
                    <div className="form">
                        <label htmlFor="">Api Key</label>
                        <br />
                        <input ref={el => this.apiKeyInput = el} onChange={this.handleInputChange} value={this.state.apiKey} name='apiKey' type="text" />
                        {this.state.apiKeyError && <div className="error apiKeyError">{this.errors.apiKey}</div>}
                        <label htmlFor="">Api Secret</label>
                        <br />
                        <input ref={el => this.apiSecretInput = el} onChange={this.handleInputChange} value={this.state.apiSecret} name='apiSecret' type="text" />
                        {this.state.apiSecretError && <div className="error apiSecretError">{this.errors.apiSecret}</div>}
                        {this.state.respMessage && <div className="error respMessage">{this.state.respMessage}</div>}
                        <br />
                        <input type="submit" onClick={this.handleSubmit} value="Save your API keys" />
                    </div>
                </div> : <div className='apiSettingsUpdated'><h1>Api Settings</h1><input type="submit" value="Updated" /></div>}
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        apiKey: state.apiKey,
        apiSecret: state.apiSecret
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleSaveApi: (apiKey, apiSecret) => dispatch({ type: actionTypes.SAVE_API, apiKey, apiSecret })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApiSettings);