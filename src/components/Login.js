import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
import ForgotPassword from './ForgotPassword'

class Login extends Component {
    state = {
        email: '',
        password: '',
        twoFactorAuth: '',
        emailError: false,
        passwordError: false,
        responseError: '',
        showForgotPassword: false
    }

    errors = {
        wrongEmail: 'Invalid email address',
        wrongPassword: 'Password has to be between 8-30 characters'
    }

    toggleForgotPassword = () => {
        this.setState({
            showForgotPassword: !this.state.showForgotPassword
        })
    }

    handleEmailError = (e) => {
        const emailInput = document.getElementById('loginEmailInput')
        // eslint-disable-next-line
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!this.state.email.includes('@') || this.state.email.trim === '' || !filter.test(this.state.email)) {
            emailInput.style.borderColor = 'red'
            emailInput.style.borderWidth = '2px'
            this.setState({
                emailError: true
            })
            setTimeout(() => {
                emailInput.style.borderColor = 'unset'
                emailInput.style.borderWidth = '1px'
                this.setState({
                    emailError: false
                })
            }, 2000)
            return true
        } else {
            emailInput.style.borderColor = 'unset'
            emailInput.style.borderWidth = '1px'
            this.setState({
                emailError: false
            })
        }
    }

    handlePasswordError = () => {
        const passwordInput = document.getElementById('loginPasswordInput')

        if (this.state.password.length < 8) {
            passwordInput.style.borderColor = 'red'
            passwordInput.style.borderWidth = '2px'
            this.setState({
                passwordError: true
            })
            setTimeout(() => {
                passwordInput.style.borderColor = 'unset'
                passwordInput.style.borderWidth = '1px'
                this.setState({
                    passwordError: false
                })
            }, 2000)
            return true
        } else {
            passwordInput.style.borderColor = 'unset'
            passwordInput.style.borderWidth = '1px'
            this.setState({
                passwordError: false
            })
        }
    }

    handleSubmitLogin = (e) => {
        e.preventDefault();
        const isEmailError = this.handleEmailError();
        const isPasswordError = this.handlePasswordError()
        if (isEmailError || isPasswordError) {
            return
        }
        const email = this.state.email
        const password = this.state.password
        fetch('https://crypto-tool-server.herokuapp.com/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
                token: this.state.twoFactorAuth
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    const user = data.user
                    const token = data.token
                    const referral = data.referral
                    const referralCounter = data.referralCounter
                    this.props.saveUser(user, token, true, referralCounter, referral)
                    this.props.handleIsBillingAddressUpdated(data.isBillingAddress)
                    this.props.handleIsTwoFactorAuthEnabled(data.isTwoFactorAuth)
                    if (data.api) {
                        this.props.handleSaveApi(data.api.apiKey, data.api.apiSecret)
                    }
                    localStorage.setItem('bitTraderUser', token)
                    this.props.history.push('/dashboard')
                } else if (data === 'wrong password') {
                    this.setState({
                        responseError: 'Wrong username or password.'
                    })
                    setTimeout(() => {
                        this.setState({
                            responseError: ''
                        })
                    }, 2000)
                } else {
                    this.setState({
                        responseError: 'We have encountered an Error. Try again later.'
                    })
                    setTimeout(() => {
                        this.setState({
                            responseError: ''
                        })
                    }, 2000)
                }
            })
    }

    handleLoginAuth = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'password') {
            this.setState({
                password: value
            })
        } else if (name === 'email') {
            this.setState({
                email: value
            })
        } else if (name === 'Fa') {
            this.setState({
                twoFactorAuth: value
            })
        }
    }

    render() {
        return (
            <>
                <div className="login">
                    {this.props.isAuth && <Redirect to='/dashboard' />}
                    <h1>Login Account</h1>
                    <form action="" >
                        <label htmlFor="">Account</label>
                        <br />
                        <input id='loginEmailInput' name='email' type="email" placeholder='Email' onChange={this.handleLoginAuth} value={this.state.email} />
                        {this.state.emailError && <div className="error">{this.errors.wrongEmail}</div>}
                        <br />
                        <label htmlFor="">Password</label>
                        <br />
                        <input id='loginPasswordInput' name='password' type="password" placeholder='Please enter a password' onChange={this.handleLoginAuth} value={this.state.password} />
                        {this.state.passwordError && <div className="error">{this.errors.wrongPassword}</div>}
                        <br />
                        <label htmlFor="">Two-Factor Token (if enabled)</label>
                        <br />
                        <input id='loginFaInput' name='Fa' type="number" placeholder='Google Authenticator' onChange={this.handleLoginAuth} value={this.state.twoFactorAuth} />
                        <div className="forgotPasswordButton" onClick={this.toggleForgotPassword} >Forgot Password ?</div>
                        <button className='submit' onClick={this.handleSubmitLogin} >Login</button>
                        <div className="responseError">{this.state.responseError}</div>
                    </form>
                    <div className="noAcc">Dont't have an account yet? <Link to='/register'>Register Now</Link></div>
                </div>
                {this.state.showForgotPassword && <ForgotPassword toggleForgotPassword={this.toggleForgotPassword} />}
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveUser: (user, token, isAuth, referralCounter, referral) => dispatch(actionTypes.saveUser(user, token, isAuth, referralCounter, referral)),
        handleSaveApi: (apiKey, apiSecret) => dispatch({ type: actionTypes.SAVE_API, apiKey, apiSecret }),
        handleIsBillingAddressUpdated: (isUpdated) => dispatch({ type: actionTypes.IS_BILLING_ADDRESS_UPDATED, isUpdated }),
        handleIsTwoFactorAuthEnabled: (isEnabled) => dispatch({ type: actionTypes.IS_TWO_FACTOR_AUTH_ENABLED, isEnabled }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));