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
export const SHOW_USER_SETTINGS = 'SHOW_USER_SETTINGS';
export const SHOW_SUBSCRIPTIONS = 'SHOW_SUBSCRIPTIONS';
export const IS_BILLING_ADDRESS_UPDATED = 'IS_BILLING_ADDRESS_UPDATED';
export const IS_TWO_FACTOR_AUTH_ENABLED = 'IS_TWO_FACTOR_AUTH_ENABLED';
export const SAVE_API_TEMPORARY = 'SAVE_API_TEMPORARY';
export const SHOW_INVITE_FRIENDS = 'SHOW_INVITE_FRIENDS';
export const DASHBOARD_SIZE = 'DASHBOARD_SIZE';


export const handleIsBillingAddressUpdated = isUpdated => {
    return {
        type: IS_BILLING_ADDRESS_UPDATED,
        isUpdated
    }
}
export const handleDashboardSize = size => {
    return {
        type: DASHBOARD_SIZE,
        size
    }
}
export const handleIsTwoFactorAuthEnabled = isEnabled => {
    return {
        type: IS_TWO_FACTOR_AUTH_ENABLED,
        isEnabled
    }
}
export const handleShowSubscriptions = () => {
    return {
        type: SHOW_SUBSCRIPTIONS,
    }
}
export const handleShowInviteFriends = () => {
    return {
        type: SHOW_INVITE_FRIENDS,
    }
}
export const handleShowUserSettings = () => {
    return {
        type: SHOW_USER_SETTINGS,
    }
}
export const handleShowBitmexLivePrice = showBitmexLivePrice => {
    return {
        type: SHOW_BITMEX_LIVE_PRICE,
        showBitmexLivePrice
    }
}
export const handleShowTechAnalysisWidget = showTechAnalysisWidget => {
    return {
        type: SHOW_TECH_ANALYSIS_WIDGET,
        showTechAnalysisWidget
    }
}
export const handleShowMarketDataWidget = showMarketDataWidget => {
    return {
        type: SHOW_MARKET_DATA_WIDGET,
        showMarketDataWidget
    }
}
export const handleShowBitmexScaler = showBitmexScaler => {
    return {
        type: SHOW_BITMEX_SCALER,
        showBitmexScaler
    }
}
export const handleSaveCoins = coins => {
    return {
        type: SAVE_COINS,
        coins
    }
}
export const handleSaveAllCoins = coins => {
    return {
        type: SAVE_ALL_COINS,
        coins
    }
}
export const handleShowCalculator = showCalculator => {
    return {
        type: SHOW_CALCULATOR,
        showCalculator
    }
}
export const saveApi = (apiKey, apiSecret) => {
    return {
        type: SAVE_API,
        apiKey,
        apiSecret
    }
}
export const saveApiTemporary = (apiKeyTemporary, apiSecretTemporary) => {
    return {
        type: SAVE_API_TEMPORARY,
        apiKeyTemporary,
        apiSecretTemporary
    }
}
export const handleShowProfitCalculator = showProfitCalculator => {
    return {
        type: SHOW_PROFIT_CALCULATOR,
        showProfitCalculator
    }
}
export const handleShowBitmexCounter = showBitmexCounter => {
    return {
        type: SHOW_BITMEX_COUNTER,
        showBitmexCounter
    }
}
export const handleShowTradingview = showTradingview => {
    return {
        type: SHOW_TRADINGVIEW,
        showTradingview
    }
}
export const handlePathChange = path => {

    return {
        type: HANDLE_PATH_CHANGE,
        path
    }
}
export const saveUser = (user, token, isAuth, referralCounter, referral) => {
    return {
        type: SAVE_USER,
        user,
        token,
        isAuth,
        referralCounter,
        referral
    }
}
