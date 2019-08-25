import React, { Component } from 'react';
import DashboardNav from './DashboardNav'
import PriceSpinner from './PriceSpinner'
import Ticker from 'react-ticker'
import ProfitCalculator from './ProfitCalculator'
import Calculator from './Calculator'
import Draggable from 'react-draggable';
import * as actionTypes from '../store/actions'
import { connect } from 'react-redux'
import ShortsLongsCounter from './ShortsLongsCounter'
import BitmexScaler from './BitmexScaler'
import TechnicalAnalysisWidget from './TechnicalAnalysisWidget'
import MarketDataWidget from './MarketDataWidget'
import BitmexLivePrice from './BitmexLivePrice'
import TradingViewChart from './TradingViewChart'
import BitmexPositions from './BitmexPositions'

import InviteFriends from './InviteFriends'
import Subscriptions from './Subscriptions'
import UserSettings from './UserSettings'

class Dashboard extends Component {
    state = {
        coinsArray: [],
        lockedDraggable: true,
        redirect: false,
        showSubscriptions: false,
    }

    componentDidMount = () => {
        (async () => {
            const cp = require('coinpaprika-js');
            const coins = await cp.tickers()
            this.props.handleSaveAllCoins(coins)
            let coinsArray = []
            for (let i = 0; i < 11; i++) {
                const coin = coins.find((coin) => {
                    return (
                        coin.rank === i + 1
                    )
                })
                coinsArray.push(coin)
            }
            this.props.handleSaveCoins(coinsArray)
        })();

        setInterval(() => {
            (async () => {
                const cp = require('coinpaprika-js');
                const coins = await cp.tickers()
                let coinsArray = []
                for (let i = 0; i < 11; i++) {
                    const coin = coins.find((coin) => {
                        return (
                            coin.rank === i + 1
                        )
                    })
                    coinsArray.push(coin)
                }
                this.props.handleSaveCoins(coinsArray)
            })();
        }, 30000)

        // const body = document.getElementById('wrapper')
        // const url = this.props.match.path
        // if (url === '/dashboard') {
        //     body.style.height = `calc(100vh * ${Number(this.props.dashboardSize)})`
        // } else {
        //     body.style.height = '130vh'
        // }
    }
    toggleSubscriptions = () => {
        this.setState({
            showSubscriptions: !this.state.showSubscriptions
        })
    }

    handleDisplayBlur = showBlur => {
        if (!this.state.lockedDraggable) {
            const blur = document.getElementById(showBlur)
            blur.style.display = 'block'
        }

    }

    handleRemoveBlur = showBlur => {
        if (!this.state.lockedDraggable) {
            const blur = document.getElementById(showBlur)
            blur.style.display = 'none'
        }
    }
    websocketImplementation = () => {
        //WEBSOCKET IMPLEMENTATION WITHOUT BACKEND

        // const socket = new WebSocket('wss://www.bitmex.com/realtime?subscribe=instrument,orderBook:XBTUSD');
        // socket.addEventListener('open', function (event) {
        //     socket.send('Hello Server!');
        // });
        // socket.addEventListener('message', function (event) {
        //     console.log('Message from server ', event.data);
        // });
    }
    handleLockDrag = () => {
        this.setState({
            lockedDraggable: !this.state.lockedDraggable
        })
    }

    render() {

        return (
            <>
                <div className="dashboard">
                    {this.props.coins && <Ticker offset="run-in" speed={10} >
                        {() => <PriceSpinner />}
                    </Ticker>}
                    <DashboardNav handleLockDrag={this.handleLockDrag} lockedDraggable={this.state.lockedDraggable} />
                    {this.props.showCalculator && <Draggable handle="section" disabled={this.state.lockedDraggable} >
                        <div>
                            <Calculator handleDisplayBlur={this.handleDisplayBlur} handleRemoveBlur={this.handleRemoveBlur} lockedDraggable={this.state.lockedDraggable} />
                        </div>
                    </Draggable>}

                    {this.props.showProfitCalculator && <Draggable handle='section' disabled={this.state.lockedDraggable} >
                        <div>
                            <ProfitCalculator handleDisplayBlur={this.handleDisplayBlur} handleRemoveBlur={this.handleRemoveBlur} lockedDraggable={this.state.lockedDraggable} />
                        </div>
                    </Draggable>}
                    {this.props.showTradingview && <Draggable disabled={this.state.lockedDraggable} >
                        <div>
                            <TradingViewChart handleDisplayBlur={this.handleDisplayBlur} handleRemoveBlur={this.handleRemoveBlur} lockedDraggable={this.state.lockedDraggable} />
                        </div>
                    </Draggable>}
                    {this.props.showBitmexCounter && <Draggable disabled={this.state.lockedDraggable} >
                        <div>
                            <ShortsLongsCounter lockedDraggable={this.state.lockedDraggable} />
                        </div>
                    </Draggable>}
                    <Draggable handle='section' disabled={this.state.lockedDraggable} >
                        <div className='scalerWrapper'>
                            {this.props.showBitmexScaler && <BitmexScaler handleDisplayBlur={this.handleDisplayBlur} handleRemoveBlur={this.handleRemoveBlur} lockedDraggable={this.state.lockedDraggable} />}
                        </div>
                    </Draggable>
                    {this.props.showTechAnalysisWidget && <Draggable disabled={this.state.lockedDraggable} >
                        <div>
                            <TechnicalAnalysisWidget handleDisplayBlur={this.handleDisplayBlur} lockedDraggable={this.state.lockedDraggable} handleRemoveBlur={this.handleRemoveBlur} />
                        </div>
                    </Draggable>}
                    {this.props.showMarketDataWidget && <Draggable disabled={this.state.lockedDraggable} >
                        <div>
                            <MarketDataWidget handleDisplayBlur={this.handleDisplayBlur} handleRemoveBlur={this.handleRemoveBlur} lockedDraggable={this.state.lockedDraggable} />
                        </div>
                    </Draggable>}
                    {this.props.showBitmexLivePrice && <Draggable disabled={this.state.lockedDraggable} >
                        <div>
                            <BitmexLivePrice lockedDraggable={this.state.lockedDraggable} />
                        </div>
                    </Draggable>}
                    {/* <BitmexPositions /> */}
                    {this.props.showUserSettings && <UserSettings />}
                    {this.props.showSubscriptions && <Subscriptions toggleSubscriptions={this.toggleSubscriptions} />}
                    {this.props.showInviteFriends && <InviteFriends />}
                    <div className="version">Beta v0.2</div>
                </div>
            </>
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
        email: state.email,
        coins: state.coins,
        showMarketDataWidget: state.showMarketDataWidget,
        showTechAnalysisWidget: state.showTechAnalysisWidget,
        showBitmexLivePrice: state.showBitmexLivePrice,
        showUserSettings: state.showUserSettings,
        showSubscriptions: state.showSubscriptions,
        showInviteFriends: state.showInviteFriends,
        dashboardSize: state.dashboardSize
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleSaveCoins: (coins) => dispatch({ type: actionTypes.SAVE_COINS, coins }),
        handleSaveAllCoins: (coins) => dispatch({ type: actionTypes.SAVE_ALL_COINS, coins })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);