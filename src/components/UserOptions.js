import React, { Component } from 'react';
import { connect } from 'react-redux'
import Logout from './Logout'
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
                <button className="userOptionsButton" onClick={this.handleShowUserOptions}><i className="fas fa-cog"></i></button>
                <ul className="options">
                    <li>Your Profile</li>
                    <li>Subscribtion</li>
                    <li>Options</li>
                    <li><Logout /></li>
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

export default connect(mapStateToProps)(UserOptions);