import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class Logout extends Component {
    state = {  }
    handleLogoutUser=()=>{
        localStorage.clear()
    }
    render() { 
        return ( 
            <Link to='/' className="logout" onClick={this.handleLogoutUser}>Logout</Link>
         );
    }
}
 
export default withRouter(Logout);