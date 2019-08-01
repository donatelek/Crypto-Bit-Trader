import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

class ScalerInterface extends Component {
    state = {
        symbol: 'XBTUSD',
        orderQty: 100,
        price: 595,
        ordType: 'Limit',
        side: 'Buy',
        short: false,
        long: true,
        lowestPrice: 1000,
        highestPrice: 2000,
        split: 10,
        preview: '',
        ordersPerTrade: '',
        leverage: 100,
        backedError: '',
        errorMessage: ''
    }

    handleInstrumentSelect = (e) => {
        const value = e.target.value
        this.setState({
            symbol: value
        })
    }

    handleSideChange = (e) => {
        const side = e.target.id
        this.setState({
            side
        })
        if (side === 'long') {
            this.setState({
                side: 'Buy',
                long: true,
                short: false
            })
        } else {
            this.setState({
                side: 'Sell',
                long: false,
                short: true
            })
        }
    }

    handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'quantity') {
            this.setState({
                orderQty: value
            })
        } else if (name === 'lowestPrice') {
            this.setState({
                lowestPrice: value
            })
        } else if (name === 'highestPrice') {
            this.setState({
                highestPrice: value
            })
        } else if (name === 'split') {
            this.setState({
                split: value
            })
        } else if (name === 'leverage') {
            this.setState({
                leverage: value
            })
        }
    }

    handleValidation = () => {
        const end = Number(this.state.highestPrice)
        const start = Number(this.state.lowestPrice)
        const split = Number(this.state.split)
        let errors = {
            rangePrice: false,
            split: false,
            orderQty: false,
            leverage: false
        }
        if (end < 1 || !end || start >= end) {
            document.getElementById('highestPriceInput').style.borderColor = 'red';
            errors.rangePrice = true
        } else {
            document.getElementById('highestPriceInput').style.borderColor = 'rgb(107, 94, 94)';
            errors.rangePrice = false
        }
        if (start < 1 || !start || end <= start) {
            document.getElementById('lowestPriceInput').style.borderColor = 'red';
            errors.rangePrice = true
        } else {
            document.getElementById('lowestPriceInput').style.borderColor = 'rgb(107, 94, 94)';
            errors.rangePrice = false
        }
        if (split < 1 || !split || split > this.state.orderQty) {
            document.getElementById('splitInput').style.borderColor = 'red';
            errors.split = true
        } else {
            document.getElementById('splitInput').style.borderColor = 'rgb(107, 94, 94)';
            errors.split = false
        }
        if (this.state.orderQty < 1 || !this.state.orderQty || split > this.state.orderQty) {
            document.getElementById('quantityInput').style.borderColor = 'red';
            errors.orderQty = true
        } else {
            document.getElementById('quantityInput').style.borderColor = 'rgb(107, 94, 94)';
            errors.orderQty = false
        }
        if (this.state.leverage < 0 || this.state.leverage > 100 || !this.state.leverage) {
            document.getElementById('leverageInput').style.borderColor = 'red';
            errors.leverage = true
        } else {
            document.getElementById('leverageInput').style.borderColor = 'rgb(107, 94, 94)';
            errors.leverage = false
        }
        return errors
    }

    handleSubmitOrder = () => {
        const end = Number(this.state.highestPrice)
        const start = Number(this.state.lowestPrice)
        const split = Number(this.state.split)
        const prices = []
        const errors = this.handleValidation()
        if (errors.orderQty || errors.rangePrice || errors.split || errors.leverage) {
            return
        }
        const dprice = (end - start) / (split - 1)
        for (let i = 0; i < split; i++) {
            let price
            if (i === 0) {
                price = Number(start)
            } else if (i === end - 1) {
                price = Number(end)
            } else {
                price = start + dprice * i
            }
            price = parseFloat((Math.round(price * 2) / 2).toFixed(1))
            prices.push(price)
        }
        const ordersPerTrade = Math.floor(this.state.orderQty / split)
        var apiKey = this.props.apiKey;
        var apiSecret = this.props.apiSecret;
        const { symbol, ordType, side, leverage } = this.state;
        if (typeof ordersPerTrade !== 'number' || leverage < 0 || leverage > 100 || apiKey.length !== 24 || apiSecret.length !== 48) {
            return
        }
        const url = 'https://crypto-tool-server.herokuapp.com/scale'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                symbol,
                orderQty: ordersPerTrade,
                prices,
                ordType,
                side,
                apiKey,
                apiSecret,
                leverage,
                platform: this.props.platform
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                if (response === 'success') {
                    this.setState({
                        errorMessage: response
                    })
                    setTimeout(() => {
                        this.setState({
                            errorMessage: ''
                        })
                    }, 3000)
                } else {
                    this.setState({
                        backedError: true,
                        errorMessage: response
                    })
                    setTimeout(() => {
                        this.setState({
                            backedError: false,
                            errorMessage: response
                        })
                    }, 3000)
                }
            })
            .catch(error => console.error('Error:', error));
    }

    handlePreview = () => {
        const end = Number(this.state.highestPrice)
        const start = Number(this.state.lowestPrice)
        const split = Number(this.state.split)
        const prices = []
        const errors = this.handleValidation()
        if (errors.orderQty || errors.rangePrice || errors.split || errors.leverage) {
            return
        }
        const dprice = (end - start) / (split - 1)
        for (let i = 0; i < split; i++) {
            let price
            if (i === 0) {
                price = Number(start)
            } else if (i === end - 1) {
                price = Number(end)
            } else {
                price = start + dprice * i
            }
            price = parseFloat((Math.round(price * 2) / 2).toFixed(1))
            prices.push(price)
        }
        const ordersPerTrade = Math.floor(this.state.orderQty / split)
        const preview = prices.map((price, index) => {
            return (
                <li key={index}>
                    <div className="coinPreview">{this.state.symbol}</div>
                    <div className="amountPreview">{ordersPerTrade}</div>
                    <div className="pricePreview">{price}</div>
                </li>
            )
        })
        this.setState({
            preview,
            ordersPerTrade
        })
    }
    handleExitInterface = () => {
        this.props.handleSaveApi('', '')
    }
    render() {
        return (
            <div className="scalerInterface">
                <div className="sideInstrumentWrapper">
                    <div className="instrument">
                        <label htmlFor="">Instrument</label>
                        <br />
                        <select onChange={this.handleInstrumentSelect}>
                            <option value="XBTUSD">XBTUSD</option>
                            <option value="XBTU19">XBTU19</option>
                            <option value="XBTZ19">XBTZ19</option>
                            <option value="ADAU19">ADAU19</option>
                            <option value="BCHU19">BCHU19</option>
                            <option value="EOSU19">EOSU19</option>
                            <option value="ETHUSD">ETHUSD</option>
                            <option value="ETHU19">ETHU19</option>
                            <option value="LTCU19">LTCU19</option>
                            <option value="TRXU19">TRXU19</option>
                            <option value="XRPU19">XRPU19</option>
                        </select>
                    </div>
                    <div className="leverage">
                        <label htmlFor="">Leverage</label>
                        <br />
                        <input type="number" onChange={this.handleInputs} value={this.state.leverage} id='leverageInput' name="leverage" placeholder='1-100 0 for cross' />
                    </div>
                    <div className="side">
                        <ul>
                            <li>
                                <label htmlFor="long">Long</label>
                                <input id='long' type="radio" checked={this.state.long} onChange={this.handleSideChange} />
                            </li>
                            <li>
                                <input id='short' checked={this.state.short} type="radio" onChange={this.handleSideChange} />
                                <label htmlFor="short">Short</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="inputsWrapper">
                    <div className="quantity">
                        <div>
                            <label htmlFor="Quantity">Quantity</label>
                            <br />
                            <input type="number" name='quantity' onChange={this.handleInputs} value={this.state.orderQty} id='quantityInput' />
                        </div>
                    </div>
                    <div className="lowestPrice">
                        <div>
                            <label htmlFor="">Lowest Price</label>
                            <br />
                            <input type="number" name='lowestPrice' onChange={this.handleInputs} value={this.state.lowestPrice} id='lowestPriceInput' />
                        </div>
                    </div>
                    <div className="highestPrice">
                        <div>
                            <label htmlFor="">Highest Price</label>
                            <br />
                            <input type="number" name='highestPrice' onChange={this.handleInputs} value={this.state.highestPrice} id='highestPriceInput' />
                        </div>
                    </div>
                    <div className="split">
                        <div>
                            <label htmlFor="">Split</label>
                            <br />
                            <input type="number" name='split' onChange={this.handleInputs} value={this.state.split} id='splitInput' />
                        </div>
                    </div>
                </div>
                {this.state.backedError ? <div className="serverResponse">{this.state.errorMessage}</div> : <div className="serverResponse">{this.state.errorMessage}</div>}
                <div className="preview">
                    {this.state.preview && <div className="previewTitlesWrapper">
                        <div className="coin">Coin</div>
                        <div className="amount">Amount</div>
                        <div className="price">Price</div>
                    </div>}
                    <ul>
                        {this.state.preview && this.state.preview}
                    </ul>
                </div>
                <div className="buttonWrapper">
                    <button onClick={this.handlePreview} className='previewButton'>Preview</button>
                    <button onClick={this.handleSubmitOrder} className='submitButton'>Submit</button>
                </div>
                <div className="backButton" onClick={this.handleExitInterface} >Back</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        apiKey: state.apiKey,
        apiSecret: state.apiSecret,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleSaveApi: (apiKey, apiSecret) => dispatch({ type: actionTypes.SAVE_API, apiKey, apiSecret })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScalerInterface);