import React, { Component } from 'react';
import { connect } from 'react-redux'
class PriceSpinner extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="priceSpinner" >
                    <ul >
                        <li>
                            <h1>{this.props.coins[0].name.replace(/\s/g, '')}</h1>
                            <h3>({this.props.coins[0].symbol})</h3>
                            <span>-</span>
                            <div className="price">{this.props.coins[0].quotes.USD.price.toFixed()}$</div>
                        </li>

                        <li>
                            <h1>{this.props.coins[1].name.replace(/\s/g, '')}</h1>
                            <h3>({this.props.coins[1].symbol})</h3>
                            <span>-</span>
                            <div className="price">{this.props.coins[1].quotes.USD.price.toFixed(2)}$</div>
                        </li>
                        <li>
                            <h1>{this.props.coins[2].name.replace(/\s/g, '')}</h1>
                            <h3>({this.props.coins[2].symbol})</h3>
                            <span>-</span>
                            <div className="price">{this.props.coins[2].quotes.USD.price.toFixed(2)}$</div>
                        </li>
                        <li>
                            <h1>{this.props.coins[3].name.replace(/\s/g, '')}</h1>
                            <h3>({this.props.coins[3].symbol})</h3>
                            <span>-</span>
                            <div className="price">{this.props.coins[3].quotes.USD.price.toFixed(2)}$</div>
                        </li>
                        <li>
                            <h1>{this.props.coins[4].name.replace(/\s/g, '')}</h1>
                            <h3>({this.props.coins[4].symbol})</h3>
                            <span>-</span>
                            <div className="price">{this.props.coins[4].quotes.USD.price.toFixed(2)}$</div>
                        </li>
                        <li>
                            <h1>{this.props.coins[5].name.replace(/\s/g, '')}</h1>
                            <h3>({this.props.coins[5].symbol})</h3>
                            <span>-</span>
                            <div className="price">{this.props.coins[5].quotes.USD.price.toFixed(2)}$</div>
                        </li>
                        <li>
                            <h1>{this.props.coins[6].name.replace(/\s/g, '')}</h1>
                            <h3>({this.props.coins[6].symbol})</h3>
                            <span>-</span>
                            <div className="price">{this.props.coins[6].quotes.USD.price.toFixed(2)}$</div>
                        </li>
                        <li>
                            <h1>{this.props.coins[7].name.replace(/\s/g, '')}</h1>
                            <h3>({this.props.coins[7].symbol})</h3>
                            <span>-</span>
                            <div className="price">{this.props.coins[7].quotes.USD.price.toFixed(2)}$</div>
                        </li>
                        <li>
                            <h1>{this.props.coins[8].name.replace(/\s/g, '')}</h1>
                            <h3>({this.props.coins[8].symbol})</h3>
                            <span>-</span>
                            <div className="price">{this.props.coins[8].quotes.USD.price.toFixed(2)}$</div>
                        </li>
                        <li>
                            <h1>{this.props.coins[9].name.replace(/\s/g, '')}</h1>
                            <h3>({this.props.coins[9].symbol})</h3>
                            <span>-</span>
                            <div className="price">{this.props.coins[9].quotes.USD.price.toFixed(3)}$</div>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        coins: state.coins
    }
}
export default connect(mapStateToProps)(PriceSpinner);