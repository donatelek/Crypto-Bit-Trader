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
          const isTwoFactorAuthEnabled = data.twoFactorAuth
          const isBillingAddressUpdated = data.billingAddress
          const referral = data.referral
          const referralCounter = data.referralCounter
          this.props.handleIsBillingAddressUpdated(isBillingAddressUpdated)
          this.props.handleIsTwoFactorAuthEnabled(isTwoFactorAuthEnabled)
          this.props.saveUser(user, token, true, referralCounter, referral)
          if (data.apiKey) {
            this.props.handleSaveApi(data.apiKey, data.apiSecret)
          }
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
  componentDidMount() {
    const path = this.props.location.pathname;
    const body = this.mainWrapper
    if (body) {
      if (path === '/dashboard') {
        body.style.height = `calc(130vh * ${Number(this.props.dashboardSize)})`
      } else {
        body.style.height = 'unset'
      }
    }
  }
  render() {
    const path = this.props.location.pathname;
    const body = this.mainWrapper
    if (body) {
      if (path === '/dashboard') {
        body.style.height = `calc(130vh * ${Number(this.props.dashboardSize)})`
      } else {
        body.style.height = 'unset'
      }
    }
    return (
      <>
        {path !== '/dashboard' && <Nav />}
        <div className="body-wrap" id='wrapper' ref={el => this.mainWrapper = el}>
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
    isAuth: state.isAuth,
    dashboardSize: state.dashboardSize
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // saveUser: (user, token, isAuth, referralCounter, referral) => dispatch(actionTypes.saveUser(user, token, isAuth, referralCounter, referral)),
    saveUser: (user, token, isAuth, referralCounter, referral) => dispatch({ type: actionTypes.SAVE_USER, user, token, isAuth, referralCounter, referral }),
    handleIsBillingAddressUpdated: (isUpdated) => dispatch({ type: actionTypes.IS_BILLING_ADDRESS_UPDATED, isUpdated }),
    handleIsTwoFactorAuthEnabled: (isEnabled) => dispatch({ type: actionTypes.IS_TWO_FACTOR_AUTH_ENABLED, isEnabled }),
    handleSaveApi: (apiKey, apiSecret) => dispatch({ type: actionTypes.SAVE_API, apiKey, apiSecret }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

