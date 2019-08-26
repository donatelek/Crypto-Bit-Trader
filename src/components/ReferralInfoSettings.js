import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

class ReferralInfoSettings extends Component {
    state = {}
    handleShowRefLink = () => {
        this.props.handleShowUserSettings()
        this.props.handleShowInviteFriends()
    }
    render() {
        return (
            <div className='referralInfoSettings'>
                <h1>Referral Code</h1>
                <div>You have been invited by -----</div>
                <button onClick={this.handleShowRefLink} >Get your referral link</button>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleShowUserSettings: () => dispatch({ type: actionTypes.SHOW_USER_SETTINGS }),
        handleShowInviteFriends: () => dispatch({ type: actionTypes.SHOW_INVITE_FRIENDS })
    }
}
export default connect(null, mapDispatchToProps)(ReferralInfoSettings);