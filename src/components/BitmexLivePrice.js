import React, { Component } from 'react';


class BitmexLivePrice extends Component {
    state = {
        lastPrice: '',
        asks: '',
        bids: '',
    }

    componentDidMount() {
        const socket = new WebSocket('wss://crypto-bit-trader-live-price.herokuapp.com/');
        socket.onopen = function () {
            console.log('Opened connection to Bitmex Live Price Websocket 🎉');
        }

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            const asks = data.message.asks
            const bids = data.message.bids
            const lastPrice = data.message.price
            const reversedAsks = []
            const reversedBids = []
            if (asks && bids) {
                bids.forEach(item => {
                    reversedBids.unshift(item)
                })
                asks.forEach(item => {
                    reversedAsks.unshift(item)
                })
            }

            this.setState({
                asks: reversedAsks,
                bids: bids,
                lastPrice
            })
        }
        socket.onerror = function (event) {
            console.log(event);
        }
        //HTTP CONNECTION TO BITMEX LIVE PRICE
        // const livePriceInterval = setInterval(() => {
        //     fetch('https://bitmexlivedata.herokuapp.com/instrument?symbol=XBTUSD').then(res => res.json()).then(data => {
        //         this.setState({
        //             lastPrice: data[0].lastPrice,
        //             livePriceInterval
        //         })
        //     })
        // }, 100);
        // const orderBookInterval = setInterval(() => {
        //     fetch('https://bitmexlivedata.herokuapp.com/orderBook10?symbol=XBTUSD').then(res => res.json()).then(data => {
        //         const reversedAsks = []
        //         const reversedBids = []
        //         data[0].bids.forEach(item => {
        //             reversedBids.unshift(item)
        //         })
        //         data[0].asks.forEach(item => {
        //             reversedAsks.unshift(item)
        //         })
        //         this.setState({
        //             asks: reversedAsks,
        //             orderBookInterval,
        //         })
        //         this.setState({
        //             bids: data[0].bids
        //         })
        //     })
        // }, 100);
    }

    render() {
        let mappedAsks1
        if (this.state.asks) {
            const mappedAsks = this.state.asks.map((ask, index) => {
                return (
                    <li className='ask' key={index}>
                        <div className="askPrice">{ask[0]}</div>
                        <div className="askSize">{ask[1]}</div>
                    </li>
                )
            })
            mappedAsks1 = mappedAsks
        }
        let mappedBids1
        if (this.state.bids) {
            const mappedBids = this.state.bids.map((bid, index) => {
                return (
                    <li className='bid' key={index}>
                        <div className="bidPrice">{bid[0]}</div>
                        <div className="bidSize">{bid[1]}</div>
                    </li>
                )
            })
            mappedBids1 = mappedBids
        }

        return (
            <div className='bitmexLivePrice'>
                <div className="livePriceTitles">
                    <ul className='livePriceTitlesWrapper'>
                        <li onClick={this.updateStateFromWebsocket} >Price</li>
                        <li>Size</li>
                    </ul>
                </div>
                {mappedAsks1 && <ul className="asks">{mappedAsks1}</ul>}
                <div className='lastPrice' >{this.state.lastPrice}</div>
                {mappedBids1 && <ul className="bids">{mappedBids1}</ul>}
            </div>
        );
    }
}

export default BitmexLivePrice;