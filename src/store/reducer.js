import * as actionTypes from './actions'


const initialState = {
  showCalculator:false,
  showProfitCalculator:false,
  path:'/',
  showBitmexCounter:false,
  showTradingview:false,
  apiKey:'',
  apiSecret:'',
  showBitmexScaler:false,
  coins:'',
  allCoins:'',
  showTechAnalysisWidget:false,
  showMarketDataWidget:false,
  showBitmexLivePrice:false,
  user:'',
  token:'',
  isAuth:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
     case actionTypes.SHOW_CALCULATOR:
         return {
             ...state,
             showCalculator:!state.showCalculator
         }
     case actionTypes.SHOW_BITMEX_LIVE_PRICE:
         return {
             ...state,
             showBitmexLivePrice:!state.showBitmexLivePrice
         }
     case actionTypes.SHOW_PROFIT_CALCULATOR:
         return {
             ...state,
             showProfitCalculator:!state.showProfitCalculator
         }
     case actionTypes.SHOW_TRADINGVIEW:
         return {
             ...state,
             showTradingview:!state.showTradingview
         }
     case actionTypes.SHOW_TECH_ANALYSIS_WIDGET:
         return {
             ...state,
             showTechAnalysisWidget:!state.showTechAnalysisWidget
         }
     case actionTypes.SHOW_MARKET_DATA_WIDGET:
         return {
             ...state,
             showMarketDataWidget:!state.showMarketDataWidget
         }
     case actionTypes.SHOW_BITMEX_COUNTER:
         return {
             ...state,
             showBitmexCounter:!state.showBitmexCounter
         }
     case actionTypes.SHOW_BITMEX_SCALER:
         return {
             ...state,
             showBitmexScaler:!state.showBitmexScaler
         }
     case actionTypes.HANDLE_PATH_CHANGE:
         return {
             ...state,
             showProfitCalculator:state.path
         }
     case actionTypes.SAVE_USER:
         return {
             ...state,
             user:action.user,
             token:action.token,
             isAuth:true
         }
     case actionTypes.SAVE_COINS:
         return {
             ...state,
             coins:action.coins
         }
     case actionTypes.SAVE_ALL_COINS:
         return {
             ...state,
             allCoins:action.coins
         }
     case actionTypes.SAVE_API:
         return {
             ...state,
             apiKey:action.apiKey,
             apiSecret:action.apiSecret
         }
         default:
             return state
    }
}

export default reducer;