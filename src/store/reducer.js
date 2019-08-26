import * as actionTypes from './actions'


const initialState = {
    showCalculator: false,
    showProfitCalculator: false,
    path: '/',
    showBitmexCounter: false,
    showTradingview: false,
    apiKey: '',
    apiSecret: '',
    apiKeyTemporary: '',
    apiSecretTemporary: '',
    showBitmexScaler: false,
    coins: '',
    allCoins: '',
    showTechAnalysisWidget: false,
    showMarketDataWidget: false,
    showBitmexLivePrice: false,
    user: '',
    token: '',
    isAuth: false,
    showUserSettings: false,
    showSubscriptions: false,
    showInviteFriends: false,
    isTwoFactorAuthEnabled: false,
    isBillingAddressUpdated: false,
    referralCode: '',
    referralCounter: '',
    dashboardSize: '1',
    closeRateUs: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_CALCULATOR:
            return {
                ...state,
                showCalculator: !state.showCalculator
            }
        case actionTypes.SHOW_BITMEX_LIVE_PRICE:
            return {
                ...state,
                showBitmexLivePrice: !state.showBitmexLivePrice
            }
        case actionTypes.SHOW_PROFIT_CALCULATOR:
            return {
                ...state,
                showProfitCalculator: !state.showProfitCalculator
            }
        case actionTypes.SHOW_TRADINGVIEW:
            return {
                ...state,
                showTradingview: !state.showTradingview
            }
        case actionTypes.SHOW_TECH_ANALYSIS_WIDGET:
            return {
                ...state,
                showTechAnalysisWidget: !state.showTechAnalysisWidget
            }
        case actionTypes.SHOW_MARKET_DATA_WIDGET:
            return {
                ...state,
                showMarketDataWidget: !state.showMarketDataWidget
            }
        case actionTypes.SHOW_BITMEX_COUNTER:
            return {
                ...state,
                showBitmexCounter: !state.showBitmexCounter
            }
        case actionTypes.SHOW_BITMEX_SCALER:
            return {
                ...state,
                showBitmexScaler: !state.showBitmexScaler
            }
        case actionTypes.HANDLE_PATH_CHANGE:
            return {
                ...state,
                showProfitCalculator: state.path
            }
        case actionTypes.SAVE_USER:
            return {
                ...state,
                user: action.user,
                token: action.token,
                isAuth: action.isAuth,
                referralCounter: action.referralCounter,
                referralCode: action.referral
            }
        case actionTypes.SAVE_COINS:
            return {
                ...state,
                coins: action.coins
            }
        case actionTypes.SAVE_ALL_COINS:
            return {
                ...state,
                allCoins: action.coins
            }
        case actionTypes.SAVE_API:
            return {
                ...state,
                apiKey: action.apiKey,
                apiSecret: action.apiSecret
            }
        case actionTypes.SAVE_API_TEMPORARY:
            return {
                ...state,
                apiKeyTemporary: action.apiKeyTemporary,
                apiSecretTemporary: action.apiSecretTemporary
            }
        case actionTypes.SHOW_USER_SETTINGS:
            return {
                ...state,
                showUserSettings: !state.showUserSettings
            }
        case actionTypes.SHOW_SUBSCRIPTIONS:
            return {
                ...state,
                showSubscriptions: !state.showSubscriptions
            }
        case actionTypes.SHOW_INVITE_FRIENDS:
            return {
                ...state,
                showInviteFriends: !state.showInviteFriends
            }
        case actionTypes.IS_BILLING_ADDRESS_UPDATED:
            return {
                ...state,
                isBillingAddressUpdated: action.isUpdated
            }
        case actionTypes.IS_TWO_FACTOR_AUTH_ENABLED:
            return {
                ...state,
                isTwoFactorAuthEnabled: action.isEnabled
            }
        case actionTypes.DASHBOARD_SIZE:
            return {
                ...state,
                dashboardSize: action.size
            }
        case actionTypes.CLOSE_RATE_US:
            return {
                ...state,
                closeRateUs: true
            }
        default:
            return state
    }
}

export default reducer;