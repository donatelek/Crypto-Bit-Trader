import React, { Component } from 'react';
class ProfitCalculator extends Component {
    state = {
        quantity: 1,
        entry: 1000,
        exit: 1200,
        entryCount: null,
        exitCount: null,
        leverage: 10,
        profitLoss: null,
        profitLossPercent: null,
        roe: null,
        side: 'long',
        currency: 'btc'
    }
    componentDidMount() {
        this.handleCalculateProfit()
        document.getElementById('currencyBtc').style.color = 'rgb(246, 178, 50)'
        document.getElementById('longProfitCalculator').style.color = 'rgb(109, 218, 54)'
    }
    handleCalculateProfit = (entryProp, exitProp, leverageProp, sideProp, quantityProp, currency) => {
        const entry = entryProp || this.state.entry
        const exit = exitProp || this.state.exit
        const leverage = leverageProp || this.state.leverage
        const side = sideProp || this.state.side
        const quantity = quantityProp || this.state.quantity
        let profitLoss
        let finalProfitLoss
        let entryCount
        let exitCount
        if (currency) {
            this.handleCurrency(currency)
        }
        if (side === 'short') {
            profitLoss = entry - exit
            finalProfitLoss = -(quantity / entry - quantity / exit).toFixed(4)
            exitCount = (quantity / exit).toFixed(4)
            entryCount = (quantity / entry).toFixed(4)
        } else if (side === 'long') {
            profitLoss = exit - entry
            finalProfitLoss = (quantity / entry - quantity / exit).toFixed(4)
            exitCount = -(quantity / exit).toFixed(4)
            entryCount = -(quantity / entry).toFixed(4)
        }
        const profitLossPercent = (profitLoss / exit * 100).toFixed(2)
        const roe = (profitLossPercent * leverage).toFixed(2)
        if (!currency) {
            if (this.state.currency === 'sat') {
                entryCount = -((quantity / entry) * 100000000).toFixed()
                exitCount = -((quantity / exit) * 100000000).toFixed()
                finalProfitLoss = ((quantity / entry - quantity / exit) * 100000000).toFixed()
            } else if (this.state.currency === 'btc') {
                finalProfitLoss = (quantity / entry - quantity / exit).toFixed(4)
                exitCount = -(quantity / exit).toFixed(4)
                entryCount = -(quantity / entry).toFixed(4)
            }
        } else if (currency) {
            if (currency === 'sat') {
                entryCount = -((quantity / entry) * 100000000).toFixed()
                exitCount = -((quantity / exit) * 100000000).toFixed()
                finalProfitLoss = ((quantity / entry - quantity / exit) * 100000000).toFixed()
            } else if (currency === 'btc') {
                finalProfitLoss = (quantity / entry - quantity / exit).toFixed(4)
                exitCount = -(quantity / exit).toFixed(4)
                entryCount = -(quantity / entry).toFixed(4)
            }
        }
        this.setState({
            profitLoss: finalProfitLoss,
            profitLossPercent,
            roe,
            exitCount,
            entryCount,
            leverage
        })
    }

    handleCurrency = currency => {
        this.setState({
            currency
        })
        if (currency === 'btc') {
            document.getElementById('currencyBtc').style.color = 'rgb(246, 178, 50)'
            document.getElementById('currencySatoshi').style.color = 'white'
        } else {
            document.getElementById('currencyBtc').style.color = 'white'
            document.getElementById('currencySatoshi').style.color = 'rgb(246, 178, 50)'
        }
    }

    handleChangeSide = side => {
        this.handleCalculateProfit(null, null, null, side)
        this.setState({
            side
        })
        if (side === 'long') {
            document.getElementById('longProfitCalculator').style.color = 'rgb(35, 199, 6)'
            document.getElementById('shortProfitCalculator').style.color = 'white'
        } else {
            document.getElementById('longProfitCalculator').style.color = 'white'
            document.getElementById('shortProfitCalculator').style.color = 'red'
        }
    }

    handleCalculatorInputs = e => {
        this.handleCalculateProfit()
        const value = e.target.value
        const name = e.target.name
        if (name === 'quantity') {
            this.handleCalculateProfit(null, null, null, null, value)
            this.setState({
                quantity: value
            })
        }
        if (name === 'entry') {
            this.handleCalculateProfit(value, null, null)
            this.setState({
                entry: value
            })
        }
        if (name === 'exit') {
            this.handleCalculateProfit(null, value, null)
            this.setState({
                exit: value
            })
        }
        if (name === 'leverage' && value < 101) {
            this.handleCalculateProfit(null, null, value)
            this.setState({
                leverage: value
            })
        }
    }
    render() {
        return (
            <div className='profitCalculator'>
                <ul className='currency'>
                    <li id='currencyBtc' onClick={() => this.handleCalculateProfit(null, null, null, null, null, 'btc')}>BTC</li>
                    <li id='currencySatoshi' onClick={() => this.handleCalculateProfit(null, null, null, null, null, 'sat')}>Satoshi</li>
                </ul>
                <ul className="side">
                    <li id='longProfitCalculator' onClick={() => {
                        this.handleChangeSide('long')
                    }}>Long</li>
                    <li id='shortProfitCalculator' onClick={() => {
                        this.handleChangeSide('short')
                    }}>Short</li>
                </ul>
                <div className="calculatorInputs">
                    <div className="quantity">
                        <h1>Quantity</h1>
                        <input name='quantity' value={this.state.quantity} onChange={this.handleCalculatorInputs} type="number" />
                    </div>
                    <div className="quantity">
                        <h1>Entry Price</h1>
                        <input name='entry' value={this.state.entry} onChange={this.handleCalculatorInputs} type="number" />
                    </div>
                    <div className="quantity">
                        <h1>Exit Price</h1>
                        <input name='exit' value={this.state.exit} onChange={this.handleCalculatorInputs} type="number" />
                    </div>
                    <div className="quantity">
                        <h1>Leverage</h1>
                        <input name='leverage' value={this.state.leverage} onChange={this.handleCalculatorInputs} type="number" />
                    </div>
                </div>
                <ul className="results">
                    <li>Margin</li>
                    <li>{this.state.leverage}x</li>
                    <li>Entry</li>
                    <li>{this.state.entryCount}{this.state.currency.toUpperCase()}</li>
                    <li>Exit</li>
                    <li>{this.state.exitCount}{this.state.currency.toUpperCase()}</li>
                    <li>Profit/Loss</li>
                    <li>{this.state.profitLoss}{this.state.currency.toUpperCase()}</li>
                    <li>Profit/Loss %</li>
                    <li>{this.state.profitLossPercent}%</li>
                    <li>ROE %</li>
                    <li>{this.state.roe}%</li>
                </ul>
            </div>
        );
    }
}

export default ProfitCalculator;