import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as actionTypes from '../store/actions'
import { connect } from 'react-redux'

class Logout extends Component {
    state = {}
    handleLogoutUser = () => {
        localStorage.clear()
        this.props.saveUser('', '', false)
    }
    render() {
        return (
            <Link to='/' className="logout" onClick={this.handleLogoutUser}>Logout</Link>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveUser: (user, token, isAuth) => dispatch(actionTypes.saveUser(user, token, isAuth))
    }
}
export default connect(null, mapDispatchToProps)(withRouter(Logout));