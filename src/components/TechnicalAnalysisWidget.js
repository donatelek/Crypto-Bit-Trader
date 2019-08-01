import React, { Component } from 'react';
class TechnicalAnalysisWidget extends Component {
    state = {}
    render() {
        return (
            <div className="technicalAnalysisWidget">
                <div className="drag" onMouseDown={() => this.props.handleDisplayBlur('techAnalysisBlur')} onMouseUp={() => this.props.handleRemoveBlur('techAnalysisBlur')} ></div>
                <div className="blur" id='techAnalysisBlur' ></div>
                <iframe title='technicalAnalysisWidget' src="https://s.tradingview.com/embed-widget/technical-analysis/?locale=en#%7B%22showIntervalTabs%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22symbol%22%3A%22COINBASE%3ABTCUSD%22%2C%22interval%22%3A%221h%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22technical-analysis%22%7D" frameBorder="0"></iframe>
            </div>
        );
    }
}

export default TechnicalAnalysisWidget;