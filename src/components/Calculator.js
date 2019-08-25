import React, { Component } from 'react';
import { connect } from 'react-redux'
import Draggable from 'react-draggable';
class Calculator extends Component {
    state = {
        resultCalculator: '',
        searchedCoins: [],
        coinSearchInput: '',
        showHamburger: false
    }
    handleButtonClick = e => {
        const text = e.target.innerText
        const checkForRepeats = symbol => {
            if (this.state.resultCalculator.includes(symbol) || this.state.resultCalculator === '') {
                return true
            } else {
                return false
            }
        }
        if (text === 'C') {
            this.setState({
                resultCalculator: ''
            })
            return
        } else if (text === 'BACK') {
            const result = this.state.resultCalculator.slice(0, -1)
            this.setState({
                resultCalculator: result
            })
            return
        } else if (text === 'BTC') {
            const index = this.props.coins.findIndex(coin => {
                return coin.symbol === text
            })
            const btc = this.props.coins[index].quotes.USD.price
            this.setState({
                resultCalculator: this.state.resultCalculator + btc.toFixed(2)
            })
            return
        } else if (text === '.') {
            this.setState({
                resultCalculator: this.state.resultCalculator + text
            })
            return
        } else if (text === '÷') {
            if (!checkForRepeats('/')) {
                this.setState({
                    resultCalculator: this.state.resultCalculator + '/'
                })
                return
            }
            return
        } else if (text === '×') {
            if (!checkForRepeats('×')) {
                this.setState({
                    resultCalculator: this.state.resultCalculator + '*'
                })
                return
            }
            return
        } else if (text === '=') {
            try {
                this.setState({
                    // eslint-disable-next-line
                    resultCalculator: eval(this.state.resultCalculator)
                })
                return
            } catch (error) {
                this.setState({
                    resultCalculator: 'Error'
                })
                return
            }
        } else if (text === 'ETH') {
            const index = this.props.coins.findIndex(coin => {
                return coin.symbol === text
            })
            const btc = this.props.coins[index].quotes.USD.price
            this.setState({
                resultCalculator: this.state.resultCalculator + btc.toFixed(2)
            })
            return
        } else if (text === 'XRP') {
            const index = this.props.coins.findIndex(coin => {
                return coin.symbol === text
            })
            const btc = this.props.coins[index].quotes.USD.price
            this.setState({
                resultCalculator: this.state.resultCalculator + btc.toFixed(2)
            })
            return
        } else if (text === 'BCH') {
            const index = this.props.coins.findIndex(coin => {
                return coin.symbol === text
            })
            const btc = this.props.coins[index].quotes.USD.price
            this.setState({
                resultCalculator: this.state.resultCalculator + btc.toFixed(2)
            })
            return
        } else if (text === 'LTC') {
            const index = this.props.coins.findIndex(coin => {
                return coin.symbol === text
            })
            const btc = this.props.coins[index].quotes.USD.price
            this.setState({
                resultCalculator: this.state.resultCalculator + btc.toFixed(2)
            })
            return
        } else if (text === 'EOS') {
            const index = this.props.coins.findIndex(coin => {
                return coin.symbol === text
            })
            const btc = this.props.coins[index].quotes.USD.price
            this.setState({
                resultCalculator: this.state.resultCalculator + btc.toFixed(2)
            })
            return
        }
        this.setState({
            resultCalculator: this.state.resultCalculator + text
        })
    }
    handleSearchCoins = (e) => {
        const value = e.target.value.toUpperCase()
        const mainArray = []
        this.props.allCoins.forEach((coin, index) => {
            if (coin.symbol === value) {
                mainArray.push(this.props.allCoins[index])
            }
        })
        this.setState({
            searchedCoins: mainArray,
            coinSearchInput: value
        })
    }
    handleSearchedCoin = (e) => {
        const text = e.target.innerHTML;
        this.props.allCoins.forEach((coin, index) => {
            if (coin.name === text) {
                const ee = this.props.allCoins[index].quotes.USD.price
                this.setState({
                    resultCalculator: this.state.resultCalculator + ee,
                    coinSearchInput: '',
                    searchedCoins: []
                })
            }
        })
    }

    handleCalculatorInput = () => {
        document.getElementById("calculatorInput").blur();
    }

    handleShowHamburger = () => {
        this.setState({
            showHamburger: !this.state.showHamburger,
            coinSearchInput: '',
            searchedCoins: []
        })
    }

    render() {
        const showSearchedCoins = () => {
            if (this.state.searchedCoins.length) {
                const mappedSearchedCoins = this.state.searchedCoins.map((coin, index) => {
                    return (
                        <li key={index} onClick={this.handleSearchedCoin} >{coin.name}</li>
                    )
                })
                return mappedSearchedCoins
            } else {
                return null
            }
        }

        return (

            <div className="calculator">
                {!this.props.lockedDraggable && <><section className="drag" onMouseDown={() => this.props.handleDisplayBlur('calculatorBlur')} onMouseUp={() => this.props.handleRemoveBlur('calculatorBlur')} ></section>
                    <div className="blur" id='calculatorBlur' ></div></>}
                <div className="hamburger" >
                    {!this.state.showHamburger && <i className="fas fa-bars" onClick={this.handleShowHamburger}></i>}
                </div>
                {this.state.showHamburger && <div className="hamburgerMenu">
                    <div className="close">
                        <i className="fas fa-times" onClick={this.handleShowHamburger} ></i>
                    </div>
                    <input type="text" onChange={this.handleSearchCoins} placeholder='Write coin symbol eg. ETH' value={this.state.coinSearchInput} />
                    <ul>
                        {showSearchedCoins()}
                    </ul>
                </div>}
                <input type="text" readOnly onFocus={this.handleCalculatorInput} value={this.state.resultCalculator} id='calculatorInput' className="searchCrypto" />
                <div className="result"></div>
                <div className="buttonsWrapper">
                    <button onClick={this.handleButtonClick}>C</button>
                    <button onClick={this.handleButtonClick}>BACK</button>
                    <button onClick={this.handleButtonClick}>÷</button>
                    <button onClick={this.handleButtonClick}>×</button>
                    <button onClick={this.handleButtonClick}>7</button>
                    <button onClick={this.handleButtonClick}>8</button>
                    <button onClick={this.handleButtonClick}>9</button>
                    <button onClick={this.handleButtonClick}>-</button>
                    <button onClick={this.handleButtonClick}>4</button>
                    <button onClick={this.handleButtonClick}>5</button>
                    <button onClick={this.handleButtonClick}>6</button>
                    <button onClick={this.handleButtonClick}>+</button>
                    <button onClick={this.handleButtonClick}>1</button>
                    <button onClick={this.handleButtonClick}>2</button>
                    <button onClick={this.handleButtonClick}>3</button>
                    <button onClick={this.handleButtonClick}>=</button>
                    <button onClick={this.handleButtonClick}>.</button>
                    <button onClick={this.handleButtonClick}>0</button>
                    <button onClick={this.handleButtonClick}>BTC</button>
                    <button onClick={this.handleButtonClick}>ETH</button>
                    <button onClick={this.handleButtonClick}>XRP</button>
                    <button onClick={this.handleButtonClick}>BCH</button>
                    <button onClick={this.handleButtonClick}>LTC</button>
                    <button onClick={this.handleButtonClick}>EOS</button>
                    <button onClick={this.handleButtonClick}>Click</button>
                    <button onClick={this.handleButtonClick}>Click</button>
                    <button onClick={this.handleButtonClick}>Click</button>
                    <button onClick={this.handleButtonClick}>Click</button>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        coins: state.coins,
        allCoins: state.allCoins
    }
}
export default connect(mapStateToProps)(Calculator);