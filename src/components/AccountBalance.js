import React, { Component } from 'react';
class AccountBalance extends Component {
    state = {}
    render() {
        return (
            <div className="accountBalance">
                <ul>
                    <li>Total: 3000 XBT</li>
                    <li>Avail: 2000 XBT</li>
                </ul>
            </div>
        );
    }
}

export default AccountBalance;