import React, { Component } from 'react';
import * as actionTypes from '../store/actions'
import { connect } from 'react-redux'
class ScalerAuthentication extends Component {
    state = {
        apiKey: '',
        apiSecret: '',
        platform: 'https://testnet.bitmex.com',
        officialChecked: false,
        testnetChecked: true
    }

    handleApiChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'apiKey') {
            this.setState({
                apiKey: value
            })
        } else if (name === 'apiSecret') {
            this.setState({
                apiSecret: value
            })
        }
    }
    handleNextButton = () => {
        if (this.state.apiKey.length !== 24 || this.state.apiSecret.length !== 48) {
            if (this.state.apiKey.length !== 24) {
                document.getElementById('apiKeyInput').style.borderColor = 'red';
            }
            if (this.state.apiSecret.length !== 48) {
                document.getElementById('apiSecretInput').style.borderColor = 'red';
            }
            return
        }
        this.props.handleSaveApi(this.state.apiKey, this.state.apiSecret)
    }

    render() {
        return (
            <div className="scalerAuthentication">
                <ul className='platform'>
                    <li>
                        <input type="radio" id='official' onClick={this.props.handlePlatformChange} checked={this.props.officialChecked} />
                        <label htmlFor="official">Official</label>
                    </li>
                    <li>
                        <label htmlFor="testnet">Testnet</label>
                        <input type="radio" id='testnet' onClick={this.props.handlePlatformChange} checked={this.props.testnetChecked} />
                    </li>
                </ul>
                <div className="authWrapper">
                    <label>Api key</label>
                    <br />
                    <input type="text" name='apiKey' id='apiKeyInput' spellcheck='false' onChange={this.handleApiChange} value={this.state.apiKey} />
                    <br />
                    <label htmlFor="">Api Secret</label>
                    <br />
                    <input type="text" name='apiSecret' id='apiSecretInput' spellcheck='false' onChange={this.handleApiChange} value={this.state.apiSecret} />
                </div>
                <button className='nextButton' onClick={this.handleNextButton}>Next ></button>
                <div className="note">To get your api go here:</div>
                <ul className='bitmexLinks'>
                    <li>For Official: <a href="https://www.bitmex.com/app/apiKeys">https://www.bitmex.com/app/apiKeys</a> </li>
                    <li>For Testnet: <a href="https://testnet.bitmex.com/app/apiKeys">https://testnet.bitmex.com/app/apiKeys</a> </li>
                    <li>To check functionality go <a href="https://github.com/donatelek/Crypto-Bit-Trader">HERE</a> for demo API keys</li>
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSaveApi: (apiKey, apiSecret) => dispatch({ type: actionTypes.SAVE_API, apiKey, apiSecret })
    }
}

export default connect(null, mapDispatchToProps)(ScalerAuthentication);