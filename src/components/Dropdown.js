import React, { Component } from 'react';
import * as actionTypes from '../store/actions'
import { connect } from 'react-redux'
class Dropdown extends Component {
   state = {}
   render() {
      return (
         <div className="dropdown" test='dropdown' >
            <button className="dropbtn">Tools</button>
            <ul className="dropdown-content">
               <li onClick={this.props.handleShowCalculator}>
                  {this.props.showCalculator && <div test='cryptoCalculator' className="icon"><i className="fas fa-check"></i></div>}
                  <div className="title">Crypto Calculator</div>
               </li>
               <li onClick={this.props.handleShowProfitCalculator}>
                  {this.props.showProfitCalculator && <div className="icon"><i className="fas fa-check"></i></div>}
                  <div className="title">Margin Profit Calculator</div>
               </li>
               <li onClick={this.props.handleShowBitmexCounter}>
                  {this.props.showBitmexCounter && <div className="icon"><i className="fas fa-check"></i></div>}
                  <div className="title">Bitmex Longs/Shorts Counter</div>
               </li>
               <li onClick={this.props.handleShowTradingview}>
                  {this.props.showTradingview && <div className="icon"><i className="fas fa-check"></i></div>}
                  <div className="title">TradingView Chart</div>
               </li>
               <li onClick={this.props.handleShowBitmexScaler}>
                  {this.props.showBitmexScaler && <div className="icon"><i className="fas fa-check"></i></div>}
                  <div className="title">Bitmex Order Scaler</div>
               </li>
               <li onClick={this.props.handleShowMarketDataWidget}>
                  {this.props.showMarketDataWidget && <div className="icon"><i className="fas fa-check"></i></div>}
                  <div className="title">Bitmex Market Data</div>
               </li>
               <li onClick={this.props.handleShowTechAnalysisWidget}>
                  {this.props.showTechAnalysisWidget && <div className="icon"><i className="fas fa-check"></i></div>}
                  <div className="title">Bitcoin Technical Analysis</div>
               </li>
               <li onClick={this.props.handleShowBitmexLivePrice}>
                  {this.props.showBitmexLivePrice && <div className="icon"><i className="fas fa-check"></i></div>}
                  <div className="title">Bitmex Live Price & Orderbook</div>
               </li>
               <li>
                  <div className="title" style={{ textDecoration: 'line-through' }} >Bitmex Positions</div>
               </li>
            </ul>
         </div>
      );
   }
}
const mapStateToProps = state => {
   return {
      showCalculator: state.showCalculator,
      showBitmexScaler: state.showBitmexScaler,
      showBitmexCounter: state.showBitmexCounter,
      showTradingview: state.showTradingview,
      showProfitCalculator: state.showProfitCalculator,
      showMarketDataWidget: state.showMarketDataWidget,
      showTechAnalysisWidget: state.showTechAnalysisWidget,
      showBitmexLivePrice: state.showBitmexLivePrice
   }
}

const mapDispatchToProps = dispatch => {
   return {
      handleShowCalculator: () => dispatch({ type: actionTypes.SHOW_CALCULATOR }),
      handleShowTradingview: () => dispatch({ type: actionTypes.SHOW_TRADINGVIEW }),
      handleShowProfitCalculator: () => dispatch({ type: actionTypes.SHOW_PROFIT_CALCULATOR }),
      handleShowBitmexCounter: () => dispatch({ type: actionTypes.SHOW_BITMEX_COUNTER }),
      handleShowBitmexScaler: () => dispatch({ type: actionTypes.SHOW_BITMEX_SCALER }),
      handleShowTechAnalysisWidget: () => dispatch({ type: actionTypes.SHOW_TECH_ANALYSIS_WIDGET }),
      handleShowMarketDataWidget: () => dispatch({ type: actionTypes.SHOW_MARKET_DATA_WIDGET }),
      handleShowBitmexLivePrice: () => dispatch({ type: actionTypes.SHOW_BITMEX_LIVE_PRICE }),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);