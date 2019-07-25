export const SHOW_CALCULATOR = 'SHOW_CALCULATOR';
export const SHOW_PROFIT_CALCULATOR = 'SHOW_PROFIT_CALCULATOR';
export const SHOW_BITMEX_COUNTER = 'SHOW_BITMEX_COUNTER';
export const SHOW_TRADINGVIEW = 'SHOW_TRADINGVIEW';
export const HANDLE_PATH_CHANGE = 'HANDLE_PATH_CHANGE';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_API = 'SAVE_API';
export const SAVE_COINS = 'SAVE_COINS';
export const SAVE_ALL_COINS = 'SAVE_ALL_COINS';
export const SHOW_BITMEX_SCALER = 'SHOW_BITMEX_SCALER';
export const SHOW_TECH_ANALYSIS_WIDGET = 'SHOW_TECH_ANALYSIS_WIDGET';
export const SHOW_MARKET_DATA_WIDGET = 'SHOW_MARKET_DATA_WIDGET';
export const SHOW_BITMEX_LIVE_PRICE = 'SHOW_BITMEX_LIVE_PRICE';

export const handleShowBitmexLivePrice = showBitmexLivePrice =>{
    return{
        type:SHOW_BITMEX_LIVE_PRICE,
        showBitmexLivePrice
    }
}
export const handleShowTechAnalysisWidget = showTechAnalysisWidget =>{
    return{
        type:SHOW_TECH_ANALYSIS_WIDGET,
        showTechAnalysisWidget
    }
}
export const handleShowMarketDataWidget = showMarketDataWidget =>{
    return{
        type:SHOW_MARKET_DATA_WIDGET,
        showMarketDataWidget
    }
}
export const handleShowBitmexScaler = showBitmexScaler =>{
    return{
        type:SHOW_BITMEX_SCALER,
        showBitmexScaler
    }
}
export const handleSaveCoins = coins =>{
    return{
        type:SAVE_COINS,
        coins
    }
}
export const handleSaveAllCoins = coins =>{
    return{
        type:SAVE_ALL_COINS,
        coins
    }
}
export const handleShowCalculator = showCalculator =>{
    return{
        type:SHOW_CALCULATOR,
        showCalculator
    }
}
export const saveApi =(apiKey,apiSecret)=>{
    return{
        type:SAVE_API,
        apiKey,
        apiSecret
    }
}
export const handleShowProfitCalculator = showProfitCalculator =>{
    return{
        type:SHOW_PROFIT_CALCULATOR,
        showProfitCalculator
    }
}
export const handleShowBitmexCounter = showBitmexCounter =>{
    return{
        type:SHOW_BITMEX_COUNTER,
        showBitmexCounter
    }
}
export const handleShowTradingview = showTradingview =>{
    return{
        type:SHOW_TRADINGVIEW,
        showTradingview
    }
}
export const handlePathChange = path =>{

    return{
        type:HANDLE_PATH_CHANGE,
        path
    }
}
export const saveUser = (user,token) =>{
    return{
        type:SAVE_USER,
        user,
        token
    }
}
export const handleSaveUser = () => {
    // const hash = localStorage.getItem('bitTraderUser');
    // if(!hash){
    //     return
    //  }
    // return dispatch => {
    //     fetch('https://crypto-tool-server.herokuapp.com/getlocalstorage',{
    //         method:'post',
    //         headers:{'Content-Type':'application/json'},
    //         body: JSON.stringify({
    //             hash
    //         })
    //     }).then(res=>res.json())
    //     .then(data=>{
    //       const user=data.split(',')
    //       dispatch(saveUser(user[1]))
    //     })
    // }
}
