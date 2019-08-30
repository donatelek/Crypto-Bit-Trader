import React, { Component } from 'react';
import { Countries } from './Countries'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

class BillingAddress extends Component {
    state = {
        address: '',
        city: '',
        postalCode: '',
        country: '',
        phone: '',
        addressError: false,
        cityError: false,
        postalCodeError: false,
        countryError: false,
        respMessage: ''
    }

    errors = {
        address: 'Please write proper address',
        city: 'Please write proper city',
        postalCode: 'Please write proper postal code',
        country: 'Please write proper country',
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'address') {
            this.setState({
                address: value
            })
        } else if (name === 'city') {
            this.setState({
                city: value
            })
        } else if (name === 'postalCode') {
            this.setState({
                postalCode: value
            })
        } else if (name === 'phone') {
            this.setState({
                phone: value
            })
        } else if (name === 'country') {
            this.setState({
                country: value
            })
        }
    }

    handleSubmit = () => {
        const { address, city, postalCode, phone, country } = this.state
        let error = false
        if (!address) {
            this.addressInput.style.borderColor = 'red'
            error = true
            this.setState({
                addressError: true
            })
        }
        if (!city) {
            this.cityInput.style.borderColor = 'red'
            error = true
            this.setState({
                cityError: true
            })
        }
        if (!postalCode) {
            this.postalCodeInput.style.borderColor = 'red'
            error = true
            this.setState({
                postalCodeError: true
            })
        }
        if (!country) {
            this.countryInput.style.borderColor = 'red'
            error = true
            this.setState({
                countryError: true
            })
        }
        if (error) {
            return
        }
        fetch('https://crypto-tool-server.herokuapp.com/saveaddress', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                postalCode,
                country,
                city,
                address,
                phone,
                email: this.props.user
            })
        }).then(res => res.json())
            .then(res => {
                this.props.toggleBillingAddress()
                this.setState({
                    respMessage: res.message,
                    countryError: false,
                    postalCodeError: false,
                    cityError: false,
                    addressError: false,
                    postalCode: '',
                    country: '',
                    city: '',
                    address: ''
                })
                this.props.handleIsBillingAddressUpdated(true)
                // this.postalCodeInput.style.borderColor = 'white'
                // this.countryInput.style.borderColor = 'white'
                // this.cityInput.style.borderColor = 'white'
                // this.addressInput.style.borderColor = 'white'
            })

    }


    render() {
        return (
            <div className="billingAddress">
                <div className="close" onClick={this.props.toggleBillingAddress} ><i className="fas fa-times"></i></div>
                <h1>Billing Addresss</h1>
                <div className='form'>
                    <label htmlFor="">Address*</label>
                    <br />
                    <input ref={el => this.addressInput = el} onChange={this.handleInputChange} value={this.state.address} name='address' type="text" />
                    {this.state.addressError && <div className='error addressError'>{this.errors.address}</div>}
                    <br />
                    <label htmlFor="">City*</label>
                    <br />
                    <input ref={el => this.cityInput = el} onChange={this.handleInputChange} value={this.state.city} name='city' type="text" />
                    {this.state.cityError && <div className='error cityError'>{this.errors.city}</div>}
                    <br />
                    <label htmlFor="">Postal Code*</label>
                    <br />
                    <input ref={el => this.postalCodeInput = el} onChange={this.handleInputChange} value={this.state.postalCode} name='postalCode' type="number" />
                    {this.state.postalCodeError && <div className='error postalCodeError'>{this.errors.postalCode}</div>}
                    <br />
                    <label htmlFor="">Country*</label>
                    <br />
                    <select onChange={this.handleInputChange} ref={el => this.countryInput = el} className="form-control" id="selectCountry" name="country">
                        <option value="" defaultChecked>(please select a country)</option>
                        <Countries />
                    </select>
                    {this.state.countryError && <div className='error countryError'>{this.errors.country}</div>}
                    <br />
                    <label htmlFor="">Phone</label>
                    <br />
                    <input onChange={this.handleInputChange} value={this.state.phone} name='phone' type="number" />
                    {this.state.respMessage && <div className='error respMessage'>{this.state.respMessage}</div>}
                    <br />
                    <input onClick={this.handleSubmit} type="submit" value="Update" />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleIsBillingAddressUpdated: (isUpdated) => dispatch({ type: actionTypes.IS_BILLING_ADDRESS_UPDATED, isUpdated }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BillingAddress)