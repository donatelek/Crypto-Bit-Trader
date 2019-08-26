import React, { Component } from 'react';
import BillingAddress from './BillingAddress'
import { connect } from 'react-redux'

class AddressSettings extends Component {
    state = {
        showBillingAddress: false
    }
    toggleBillingAddress = () => {
        this.setState({
            showBillingAddress: !this.state.showBillingAddress
        })
    }
    render() {
        return (
            <div className='addressSettings'>
                <h1>Billing Address</h1>
                {this.props.isBillingAddressUpdated ? <button className='billingAddressUpdated' >Updated</button> : <button onClick={this.toggleBillingAddress} >Update</button>}
                {this.state.showBillingAddress && <BillingAddress toggleBillingAddress={this.toggleBillingAddress} />}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isBillingAddressUpdated: state.isBillingAddressUpdated
    }
}
export default connect(mapStateToProps)(AddressSettings);