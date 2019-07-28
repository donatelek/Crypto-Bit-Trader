import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
class Register extends Component {
    state = {
        email: '',
        password: '',
        referralCode: '',
        emailError: false,
        passwordError: false,
        responseError: ''
    }

    errors = {
        wrongEmail: 'Invalid email address',
        wrongPassword: 'Password has to be between 8-30 characters'
    }

    handleEmailError = (e) => {
        if (!this.state.email.includes('@') || this.state.email.trim === '') {
            this.setState({
                emailError: true
            })
            setTimeout(() => {
                this.setState({
                    emailError: false
                })
            }, 2000)
            return true
        } else {
            this.setState({
                emailError: false
            })
        }
    }

    handlePasswordError = () => {
        if (this.state.password.length < 8) {
            this.setState({
                passwordError: true
            })
            setTimeout(() => {
                this.setState({
                    passwordError: false
                })
            }, 2000)
            return true
        } else {
            this.setState({
                passwordError: false
            })
        }
    }

    handleSubmitRegister = (e) => {
        e.preventDefault();
        const isPasswordError = this.handlePasswordError()
        const isEmailError = this.handleEmailError();
        if (isPasswordError || isEmailError) {
            return
        }
        const email = this.state.email
        const password = this.state.password
        const referral = this.state.referralCode
        fetch('https://crypto-tool-server.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
                referral
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    const user = data.user
                    const token = data.token
                    this.props.saveUser(user, token, true)
                    localStorage.setItem('bitTraderUser', token)
                    this.props.history.push('/dashboard')

                    // fetch('https://crypto-tool-server.herokuapp.com/saveLocalStorage',{
                    // method:'post',
                    // headers:{'Content-Type':'application/json'},
                    // body:JSON.stringify({
                    //     id,
                    //     user,
                    //     hash
                    // })
                    // }).then(res=>res.json())
                    // .then(encrypted=>{
                    //     localStorage.setItem('bitTraderUser', encrypted)
                    //     this.props.history.push('/dashboard')
                    // })
                } else if (data === 'user exist') {
                    this.setState({
                        responseError: 'User with those credentials already exists.'
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

    handleRegisterAuth = (e) => {
        const type = e.target.type
        const value = e.target.value
        if (type === 'password') {
            this.setState({
                password: value
            })
        } else if (type === 'email') {
            this.setState({
                email: value
            })
        } else if (type === 'text') {
            this.setState({
                referralCode: value
            })
        }
    }

    render() {
        return (
            <div className="register">
                <h1>Account Registration</h1>
                <form action="">
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="email" value={this.state.email} onChange={this.handleRegisterAuth} placeholder='Please enter email address' />
                    {this.state.emailError && <div className="error">{this.errors.wrongEmail}</div>}
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" onChange={this.handleRegisterAuth} value={this.state.password} placeholder='Please enter a password' />
                    {this.state.passwordError && <div className="error">{this.errors.wrongPassword}</div>}
                    <br />
                    <label htmlFor="">Referral Code</label>
                    <br />
                    <input onChange={this.handleRegisterAuth} value={this.state.referralCode} type="text" />
                    <br />
                    <button className="submit" onClick={this.handleSubmitRegister}  >Register</button>
                    {!this.state.responseError && <div className="mobileSupport">This tool does not support mobile devices</div>}
                    <div className="responseError">{this.state.responseError}</div>
                    <br />
                    <div className="terms">By clicking Sign Up, you agree to <a href="/">Terms of service</a> and <a href="/">Privacy policy</a></div>
                </form>
                <div className="haveAcc">Already have an account? <Link to='/login'>Log in Now</Link> </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveUser: (user, token, isAuth) => dispatch(actionTypes.saveUser(user, token, isAuth))
    }
}
export default connect(null, mapDispatchToProps)(withRouter(Register));