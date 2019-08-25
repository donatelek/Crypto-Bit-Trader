import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

class PasswordChanger extends Component {
    state = {
        currentPassword: '',
        password: '',
        repeatedPassword: '',
        currentPasswordError: false,
        passwordError: false,
        repeatedPasswordError: false,
        respMessage: ''
    }

    errors = {
        currentPassword: 'Please enter your current password',
        password: 'Password has to be between 8-30 characters',
        repeatedPassword: 'Does not match Password',
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'currentPassword') {
            this.setState({
                currentPassword: value
            })
        } else if (name === 'password') {
            this.setState({
                password: value
            })
        } else if (name === 'repeatedPassword') {
            this.setState({
                repeatedPassword: value
            })
        }
    }
    handleSubmit = () => {
        const { password, repeatedPassword, currentPassword } = this.state
        let error = false
        if (password.length < 8) {
            this.currentPasswordInput.style.borderColor = 'red'
            error = true
            this.setState({
                passwordError: true
            })
        }
        if (currentPassword.length < 8) {
            this.passwordInput.style.borderColor = 'red'
            error = true
            this.setState({
                currentPasswordError: true
            })
        }
        if (password !== repeatedPassword || !repeatedPassword) {
            this.repeatedPasswordInput.style.borderColor = 'red'
            error = true
            this.setState({
                repeatedPasswordError: true
            })
        }
        if (error) {
            return
        }
        fetch('https://crypto-tool-server.herokuapp.com/passwordChange', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                currentPassword,
                password,
                email: this.props.user
            })
        }).then(res => res.json())
            .then(res => {
                if (res.status === 'success') {
                    const user = res.user
                    const token = res.token
                    const referralCounter = res.referralCounter
                    const referral = res.referral
                    this.props.saveUser(user, token, true, referralCounter, referral)
                    localStorage.setItem('bitTraderUser', token)
                }
                this.setState({
                    respMessage: res.message,
                    currentPasswordError: false,
                    repeatedPasswordError: false,
                    passwordError: false,
                    currentPassword: '',
                    repeatedPassword: '',
                    password: ''
                })
                this.repeatedPasswordInput.style.borderColor = 'white'
                this.passwordInput.style.borderColor = 'white'
                this.currentPasswordInput.style.borderColor = 'white'
            })

    }
    render() {
        return (

            <div className='passwordChanger'>
                <h1>Password</h1>
                <div className="form">
                    <label htmlFor="">Current password</label>
                    <br />
                    <input onChange={this.handleInputChange} name='currentPassword' type="password" value={this.state.currentPassword} ref={el => this.currentPasswordInput = el} />
                    {this.state.currentPasswordError && <div className="error currentPasswordError">{this.errors.currentPassword}</div>}
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input onChange={this.handleInputChange} ref={el => this.passwordInput = el} value={this.state.password} name='password' type="password" />
                    {this.state.passwordError && <div className="error passwordError">{this.errors.password}</div>}
                    <br />
                    <label htmlFor="">Password confirmation</label>
                    <br />
                    <input onChange={this.handleInputChange} value={this.state.repeatedPassword} name='repeatedPassword' type="password" ref={el => this.repeatedPasswordInput = el} />
                    {this.state.repeatedPasswordError && <div className="error repeatedPasswordError">{this.errors.repeatedPassword}</div>}
                    {this.state.respMessage && <div className="error respMessageError">{this.state.respMessage}</div>}
                    <br />
                    <input type="submit" onClick={this.handleSubmit} value="Change my password" />
                </div>
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
        saveUser: (user, token, isAuth, referralCounter, referral) => dispatch(actionTypes.saveUser(user, token, isAuth, referralCounter, referral))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PasswordChanger);