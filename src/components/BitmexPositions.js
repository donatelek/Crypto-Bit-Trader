import React, { Component } from 'react';
class BitmexPositions extends Component {
    state = {}
    render() {
        return (
            <div className="bitmexPositions">
                <div className="titles">
                    <ul>
                        <li>Symbol</li>
                        <li>Size</li>
                        <li>Entry Price</li>
                        <li>Liq. Price</li>
                        <li>ROE</li>
                        <li>Commission</li>
                    </ul>
                </div>
                <div className="positionsWrapper">
                    <ul>
                        <li>XBTUSD</li>
                        <li>3000</li>
                        <li>10050</li>
                        <li>9050</li>
                        <li>0.03 XBT (13.20%)</li>
                        <li>-0.003 XBT</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default BitmexPositions;