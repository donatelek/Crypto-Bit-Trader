import React, { Component } from 'react';
import TradingViewWidget,{Themes} from 'react-tradingview-widget';
class TradingViewChart extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tradingviewChart">
                <div className="drag" onMouseDown={()=>this.props.handleDisplayBlur('chartBlur')} onMouseUp={()=>this.props.handleRemoveBlur('chartBlur')} ></div>
                <div className="blur" id='chartBlur' ></div>
                <TradingViewWidget  className='tradingview' theme={Themes.DARK} width={800} height={400} symbol={'XBT'}/>
            </div>
         );
    }
}
 
export default TradingViewChart;