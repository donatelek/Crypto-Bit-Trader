import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

class TwoFactorAuthConnector extends Component {
    state = {
        respMessage: '',
        facode: ''
    }
    handleInputChange = e => {
        const value = e.target.value
        this.setState({
            facode: value
        })
    }
    handleSubmit = () => {
        fetch('https://crypto-tool-server.herokuapp.com/twofactorauthsubmit', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.props.user,
                facode: this.state.facode,
                secret: this.props.secret
            })
        }).then(res => res.json())
            .then(res => {
                if (res.status === 'success') {
                    this.props.handleIsTwoFactorAuthEnabled(true)
                    this.props.toggleAuthConnector()
                }
                this.setState({
                    respMessage: res.message
                })
            })
    }
    render() {
        return (
            <div className='twoFactorAuthConnector'>
                {this.props.qrCode ? <><div className="close" onClick={this.props.toggleAuthConnector} ><i class="fas fa-times"></i></div>
                    <img src={this.props.qrCode} className='captcha' alt="" />
                    <h1>Connect Google authenticatior</h1>
                    <div>Don't forget to backup your secret key:</div>
                    <div>{this.props.secret}</div>
                    <input onChange={this.handleInputChange} value={this.state.facode} type="text" placeholder='2FA code' />
                    <div className="error">{this.state.respMessage}</div>
                    <button onClick={this.handleSubmit} >OK</button>
                    <button onClick={this.props.toggleAuthConnector} >Cancel</button></> : <svg height="200" width="200">
                        <circle id="c2" cx="100" cy="100" r="50" stroke="#0000FF" stroke-width="5" fill="transparent" />
                    </svg>}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleIsTwoFactorAuthEnabled: (isEnabled) => dispatch({ type: actionTypes.IS_TWO_FACTOR_AUTH_ENABLED, isEnabled }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TwoFactorAuthConnector);