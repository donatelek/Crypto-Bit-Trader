import React, { Component } from 'react';
import './scss/DashboardNav.css'
import Dropdown from './Dropdown'
import UserOptions from './UserOptions'
import UserInformation from './UserInformation'

class DashboardNav extends Component {
    state = {  }
    render() { 
        console.log(this.props.user)
        return ( 
            <div className="dashboardNav">
                <Dropdown/>
                <UserInformation/>
                <UserOptions/>
                <div className="lockDrag">
                    {this.props.lockedDraggable?<><div onClick={this.props.handleLockDrag} >Unlock Dragging</div><i class="fas fa-lock"  onClick={this.props.handleLockDrag} ></i></>:<><div onClick={this.props.handleLockDrag} >Lock Dragging</div><i class="fas fa-lock-open" onClick={this.props.handleLockDrag}></i></>}
                </div>
            </div>
         );
    }
}

export default DashboardNav;