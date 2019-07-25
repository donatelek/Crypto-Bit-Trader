import React, { Component } from 'react';
import './scss/Register.css'
import './scss/Login.css'
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionTypes from './store/actions'
class Login extends Component {
    state = { 
        email:'',
        password:'',
        emailError:false,
        passwordError:false,
        responseError:''
     }

     errors={
         wrongEmail:'Invalid email address',
         wrongPassword:'Password has to be between 8-30 characters'
     }

     handleEmailError=(e)=>{
          if(!this.state.email.includes('@')||this.state.email.trim===''){
            this.setState({
                emailError:true
            })
            setTimeout(()=>{
                this.setState({
                    emailError:false
                })
            },2000)
            return true
         }else{
            this.setState({
                emailError:false
            })
         }
     }

     handlePasswordError=()=>{
        if(this.state.password.length<8){
            this.setState({
                passwordError:true
            })
            setTimeout(()=>{
                this.setState({
                    passwordError:false
                })
            },2000)
            return true
        }else{
            this.setState({
                passwordError:false
            })
        }
    }

    handleSubmitLogin=(e)=>{
        e.preventDefault();
        const isEmailError=this.handleEmailError();
        const isPasswordError=this.handlePasswordError()
        if(isEmailError||isPasswordError){
            return
        }
        const email=this.state.email
        const password=this.state.password
        fetch('http://localhost:3005/login',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.status==='success'){
                const user=data.user
                const token=data.token
                this.props.saveUser(user,token)
                localStorage.setItem('bitTraderUser', token)
                this.props.history.push('/dashboard')
                // fetch('http://localhost:3005/saveLocalStorage',{
                // method:'post',
                // headers:{'Content-Type':'application/json'},
                // body:JSON.stringify({
                //     user,
                //     token
                // })
                // }).then(res=>res.json())
                // .then(encrypted=>{
                //     localStorage.setItem('bitTraderUser', encrypted)
                //     // this.props.history.push('/dashboard')
                // })
            }else if(data==='wrong password'){
                this.setState({
                    responseError:'Wrong username or password.'
                })
                setTimeout(()=>{
                    this.setState({
                        responseError:''
                    })
                },2000)
            }else{
                this.setState({
                    responseError:'We have encountered an Error. Try again later.'
                })
                setTimeout(()=>{
                    this.setState({
                        responseError:''
                    })
                },2000)
            }
        })
    }

    handleLoginAuth=(e)=>{
        const type = e.target.type
        const value = e.target.value
        if(type==='password'){
            this.setState({
                password:value
            })
        }else if(type==='email'){
            this.setState({
                email:value
            })
        }
     }

    render() { 
        return ( 
            <div className="login">
                <h1>Login Account</h1>
                <form action="" >
                    <label htmlFor="">Account</label>
                    <br/>
                    <input type="email" placeholder='Email' onChange={this.handleLoginAuth} value={this.state.email} />
                    {this.state.emailError&&<div className="error">{this.errors.wrongEmail}</div>}
                    <br/>
                    <label htmlFor="">Password</label>
                    <br/>
                    <input type="password" placeholder='Please enter a password' onChange={this.handleLoginAuth} value={this.state.password} />
                    {this.state.passwordError&&<div className="error">{this.errors.wrongPassword}</div>}
                    <div className="forgotPassword">Forgot Password ?</div>
                    <button className='submit' onClick={this.handleSubmitLogin} >Login</button>
                    <div className="responseError">{this.state.responseError}</div>
                </form>
                <div className="noAcc">Dont't have an account yet? <Link to='/register'>Register Now</Link></div>
            </div>
         );
    }
}
const mapDispatchToProps=dispatch=>{
    return{
      saveUser:(user,token)=>dispatch(actionTypes.saveUser(user,token))
    }
  }
export default connect(null,mapDispatchToProps)(withRouter(Login));