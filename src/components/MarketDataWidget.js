import React, { Component } from 'react';
class MarketDataWidget extends Component {
    state = {}
    render() {
        return (
            <div className="marketDataWidget">
                <div className="drag" onMouseDown={() => this.props.handleDisplayBlur('marketDataBlur')} onMouseUp={() => this.props.handleRemoveBlur('marketDataBlur')} ></div>
                <div className="blur" id='marketDataBlur'></div>
                <iframe title='marketDataWidget' src="https://s.tradingview.com/embed-widget/market-quotes/?locale=en#%7B%22width%22%3A770%2C%22height%22%3A450%2C%22symbolsGroups%22%3A%5B%7B%22name%22%3A%22Crypto%22%2C%22symbols%22%3A%5B%7B%22name%22%3A%22BITMEX%3AXBT%22%7D%2C%7B%22name%22%3A%22BITMEX%3AADAU19%22%7D%2C%7B%22name%22%3A%22BITMEX%3ABCHU19%22%7D%2C%7B%22name%22%3A%22BITMEX%3AEOSU19%22%7D%2C%7B%22name%22%3A%22BITMEX%3AETHU19%22%7D%2C%7B%22name%22%3A%22BITMEX%3ALTCU19%22%7D%2C%7B%22name%22%3A%22BITMEX%3ATRXU19%22%7D%2C%7B%22name%22%3A%22BITMEX%3AXRPU19%22%7D%5D%7D%5D%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22market-quotes%22%7D" frameBorder="0"></iframe>
            </div>
        );
    }
}

export default MarketDataWidget;
