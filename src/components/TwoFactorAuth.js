import React, { Component } from 'react';
import TwoFactorAuthConnector from './TwoFactorAuthConnector'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

class TwoFactorAuth extends Component {
    state = {
        showAuthConnector: false,
        secret: '',
        qrCode: ''
    }
    toggleAuthConnector = () => {
        this.setState({
            showAuthConnector: !this.state.showAuthConnector,
            secret: '',
            qrCode: ''
        })
    }
    handleSubmit = () => {
        fetch('https://crypto-tool-server.herokuapp.com/twofactorauth', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.props.user
            })
        }).then(res => res.json())
            .then(res => {
                if (res.status === 'success') {
                    this.setState({
                        secret: res.secret,
                        qrCode: res.image
                    })
                } else {
                    console.log(res)
                }
            })
    }
    render() {
        return (
            <div className='twoFactorAuth'>
                <h1>2FA</h1>
                {this.props.isTwoFactorAuthEnabled ? <button className='twoFactorAuthEnabled'>Enabled</button> : <button onClick={() => {
                    this.toggleAuthConnector()
                    this.handleSubmit()
                }} >Enable Two-factor Auth</button>}
                {this.state.showAuthConnector && < TwoFactorAuthConnector toggleAuthConnector={this.toggleAuthConnector} secret={this.state.secret} qrCode={this.state.qrCode} />}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        isTwoFactorAuthEnabled: state.isTwoFactorAuthEnabled
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleIsTwoFactorAuthEnabled: (isEnabled) => dispatch({ type: actionTypes.IS_TWO_FACTOR_AUTH_ENABLED, isEnabled }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TwoFactorAuth);