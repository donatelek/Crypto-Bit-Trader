import React, { Component } from 'react';
import '../scss/style.css'
import { connect } from 'react-redux'
import Chat from './Chat';
import MainPage from './MainPage'
import { Nav, NavLogo } from './Nav'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import * as actionTypes from '../store/actions'

class App extends Component {
  state = {
    fetched: false
  }
  UNSAFE_componentWillMount() {
    const token = localStorage.getItem('bitTraderUser');
    if (!token) {
      this.setState({
        fetched: true
      })
      return
    }
    fetch('https://crypto-tool-server.herokuapp.com/getlocalstorage', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token
      })
    }).then(res => res.json())
      .then(data => {
        if (data.user && data.token) {
          const user = data.user
          const token = data.token
          this.props.saveUser(user, token, true)
        } else {
          this.props.saveUser('', '', false)
          localStorage.clear()
          this.props.history.push('/login')
        }
        this.setState({
          fetched: true
        })
      })
  }
  render() {
    const path = this.props.location.pathname;
    return (
      <>
        {path !== '/dashboard' && <Nav />}
        <div className="body-wrap" id='wrapper'>
          {path !== '/dashboard' && <NavLogo />}
          <Switch>
            <Route path='/register' exact={true} component={Register} />
            <Route path='/login' exact={true} component={Login} />
            <Route path='/' exact={true} component={MainPage} />
            {this.props.isAuth && <Route path='/dashboard' exact={true} component={Dashboard} />}
            {path === '/dashboard' && this.state.fetched && !this.props.isAuth ? <Redirect to='/login' /> : null}
          </Switch>
          {path !== '/dashboard' && <Footer />}
        </div>
        <Chat />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    path: state.path,
    email: state.email,
    isAuth: state.isAuth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveUser: (user, token, isAuth) => dispatch(actionTypes.saveUser(user, token, isAuth))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

