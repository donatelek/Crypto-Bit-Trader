import React, { Component } from 'react';
import Dropdown from './Dropdown'
import UserOptions from './UserOptions'
import UserInformation from './UserInformation'
import UpdatesInfo from './UpdatesInfo'
class DashboardNav extends Component {
    state = {}
    render() {
        return (
            <div className="dashboardNav">
                <Dropdown />
                <UserInformation />
                <UserOptions />
                <UpdatesInfo />
                <div className="lockDrag">
                    {this.props.lockedDraggable ? <><div className='czx' onClick={this.props.handleLockDrag} >Unlock Dragging</div><i className="fas fa-lock" onClick={this.props.handleLockDrag} ></i></> : <><div onClick={this.props.handleLockDrag} >Lock Dragging</div><i className="fas fa-lock-open" onClick={this.props.handleLockDrag}></i></>}
                </div>
                {/* <AccountBalance /> */}
            </div>
        );
    }
}

export default DashboardNav;