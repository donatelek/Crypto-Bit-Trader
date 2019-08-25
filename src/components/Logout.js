import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as actionTypes from '../store/actions'
import { connect } from 'react-redux'
import { thisExpression } from '@babel/types';

class Logout extends Component {
    state = {}
    handleLogoutUser = () => {
        localStorage.clear()
        this.props.saveUser('', '', false)
        this.props.handleIsBillingAddressUpdated(false)
        this.props.handleIsTwoFactorAuthEnabled(false)
        this.props.handleSaveApi('', '')
        if (this.props.showUserSettings) {
            this.props.handleShowUserSettings()
        }
        if (this.props.showSubscriptions) {
            this.props.handleShowSubscriptions()
        }
        if (this.props.showInviteFriends) {
            this.props.handleShowInviteFriends()
        }
    }
    render() {
        return (
            <div className="logout">
                <Link to='/' className="logout" onClick={this.handleLogoutUser}>Logout <i class="fas fa-sign-out-alt"></i></Link>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        showUserSettings: state.showUserSettings,
        showSubscriptions: state.showSubscriptions,
        showInviteFriends: state.showInviteFriends
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveUser: (user, token, isAuth) => dispatch(actionTypes.saveUser(user, token, isAuth)),
        handleIsBillingAddressUpdated: (isUpdated) => dispatch({ type: actionTypes.IS_BILLING_ADDRESS_UPDATED, isUpdated }),
        handleIsTwoFactorAuthEnabled: (isEnabled) => dispatch({ type: actionTypes.IS_TWO_FACTOR_AUTH_ENABLED, isEnabled }),
        handleSaveApi: (apiKey, apiSecret) => dispatch({ type: actionTypes.SAVE_API, apiKey, apiSecret }),
        handleShowUserSettings: () => dispatch({ type: actionTypes.SHOW_USER_SETTINGS }),
        handleShowInviteFriends: () => dispatch({ type: actionTypes.SHOW_INVITE_FRIENDS }),
        handleShowSubscriptions: () => dispatch({ type: actionTypes.SHOW_SUBSCRIPTIONS }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logout));