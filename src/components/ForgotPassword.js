import React, { Component } from 'react';
class ForgotPassword extends Component {
    state = {
        email: '',
        token: '',
        password: '',
        passwordConfirmation: '',
        respMessage: '',
        emailError: false,
        passwordError: false,
        passwordConfirmationError: false,
        tokenError: false
    }

    errors = {
        wrongEmail: 'kmk',
        wrongPassword: 'dfs',
        wrongPasswordConfirmation: 'qwe',
        wrongtoken: 'zxc'
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'email') {
            this.setState({
                email: value
            })
        }
        if (name === 'token') {
            this.setState({
                token: value
            })
        }
        if (name === 'password') {
            this.setState({
                password: value
            })
        }
        if (name === 'passwordConfirmation') {
            this.setState({
                passwordConfirmation: value
            })
        }
    }

    handleEmailError = (e) => {
        const emailInput = this.emailInput

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
        const passwordInput = this.passwordInput
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
    handleTokenError = () => {
        const tokenInput = this.tokenInput
        if (this.state.token.length !== 6) {
            tokenInput.style.borderColor = 'red'
            tokenInput.style.borderWidth = '2px'
            this.setState({
                tokenError: true
            })
            setTimeout(() => {
                tokenInput.style.borderColor = 'unset'
                tokenInput.style.borderWidth = '1px'
                this.setState({
                    tokenError: false
                })
            }, 2000)
            return true
        } else {
            tokenInput.style.borderColor = 'unset'
            tokenInput.style.borderWidth = '1px'
            this.setState({
                tokenError: false
            })
        }
    }
    handlePasswordConfirmationError = () => {
        const passwordConfirmationInput = this.passwordConfirmationInput
        if (!this.state.passwordConfirmation || this.state.passwordConfirmation !== this.state.password) {
            passwordConfirmationInput.style.borderColor = 'red'
            passwordConfirmationInput.style.borderWidth = '2px'
            this.setState({
                passwordConfirmationError: true
            })
            setTimeout(() => {
                passwordConfirmationInput.style.borderColor = 'unset'
                passwordConfirmationInput.style.borderWidth = '1px'
                this.setState({
                    passwordConfirmationError: false
                })
            }, 2000)
            return true
        } else {
            passwordConfirmationInput.style.borderColor = 'unset'
            passwordConfirmationInput.style.borderWidth = '1px'
            this.setState({
                passwordConfirmationError: false
            })
        }
    }

    handleSubmit = () => {
        const { password, passwordConfirmation, token, email } = this.state;
        const isEmailError = this.handleEmailError();
        const isPasswordError = this.handlePasswordError()
        const isTokenError = this.handleTokenError()
        const isPasswordConfirmationError = this.handlePasswordConfirmationError()
        if (isEmailError || isPasswordError || isTokenError || isPasswordConfirmationError) {
            return
        }
        fetch('https://crypto-tool-server.herokuapp.com/passwordReset', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                password,
                passwordConfirmation,
                token,
                email
            })
        }).then(res => res.json())
            .then(res => {
                this.setState({
                    respMessage: res.message
                })
            })
    }

    render() {
        return (
            <div className='forgotPassword'>
                <div className="close" onClick={this.props.handleShowInviteFriends} ><i class="fas fa-times" onClick={this.props.toggleForgotPassword} ></i></div>
                <h1>Forgot Password?</h1>
                <label htmlFor="">Email address associated with your account</label>
                <br />
                <input ref={el => this.emailInput = el} onChange={this.handleInputChange} value={this.state.email} name='email' type="text" />
                {this.state.emailError && <div className="error">{this.errors.wrongEmail}</div>}
                <br />
                <label htmlFor="">Two-Factor Token</label>
                <br />
                <input ref={el => this.tokenInput = el} onChange={this.handleInputChange} value={this.state.token} name='token' type="text" />
                {this.state.tokenError && <div className="error">{this.errors.wrongtoken}</div>}
                <br />
                <label htmlFor="">New Password</label>
                <br />
                <input ref={el => this.passwordInput = el} onChange={this.handleInputChange} value={this.state.password} name='password' type="password" />
                {this.state.passwordError && <div className="error">{this.errors.wrongPassword}</div>}
                <br />
                <label htmlFor="">Password Confirmation</label>
                <br />
                <input ref={el => this.passwordConfirmationInput = el} onChange={this.handleInputChange} value={this.state.passwordConfirmation} name='passwordConfirmation' type="password" />
                {this.state.passwordConfirmationError && <div className="error">{this.errors.wrongPasswordConfirmation}</div>}
                {this.state.respMessage && <div className="error respMessageError">{this.state.respMessage}</div>}
                <br />
                <input type="submit" onClick={this.handleSubmit} value="Change" />
                <div className="note">You can recover password only if you enabled google authentication</div>
                <div className="note">Password recovery using email will be available soon</div>
            </div>
        );
    }
}

export default ForgotPassword;