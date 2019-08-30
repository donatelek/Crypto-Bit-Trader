import React, { Component } from 'react';
import { connect } from 'react-redux'
import Logout from './Logout'
import * as actionTypes from '../store/actions'
class UserOptions extends Component {
    state = {
        showUserOptions: false
    }

    handleShowUserOptions = () => {
        this.setState({
            showUserOptions: !this.state.showUserOptions
        })
    }
    render() {
        return (
            <div className="userOptions">
                <button className="userOptionsButton" ><i className="fas fa-cog" onClick={this.handleShowUserOptions}></i></button>
                <ul className="options">
                    <li className='settings' onClick={this.props.handleShowSubscriptions} >Subscription <div className="icon"><i className="fas fa-credit-card"></i></div> </li>
                    <li className='settings' onClick={this.props.handleShowInviteFriends} >Invite Friends <div className="icon"><i className="fas fa-cubes"></i></div> </li>
                    <li className='settings' onClick={this.props.handleShowUserSettings}>Settings <div className="icon"><i className="fas fa-cog"></i></div> </li>
                    <li className='settings  logoutSet'><Logout /></li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.email
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleShowUserSettings: () => dispatch({ type: actionTypes.SHOW_USER_SETTINGS }),
        handleShowSubscriptions: () => dispatch({ type: actionTypes.SHOW_SUBSCRIPTIONS }),
        handleShowInviteFriends: () => dispatch({ type: actionTypes.SHOW_INVITE_FRIENDS }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserOptions);