import React, { Component } from 'react';
import ScalerAuthentication from './ScalerAuthentication'
import ScalerInterface from './ScalerInterface'
import { connect } from 'react-redux'

class BitmexScaler extends Component {
    state = {
        platform: 'https://testnet.bitmex.com',
        platformInputChecked: false,
    }

    handlePlatformChange = () => {
        this.setState({
            platformInputChecked: !this.state.platformInputChecked
        })
        if (!this.state.platformInputChecked) {
            this.setState({
                platform: 'https://www.bitmex.com',
            })
        } else {
            this.setState({
                platform: 'https://testnet.bitmex.com',
            })
        }
    }

    render() {
        return (
            <div className="bitmexScaler">
                {!this.props.lockedDraggable && <><section className="drag" onMouseDown={() => this.props.handleDisplayBlur('bitmexScalerBlur')} onMouseUp={() => this.props.handleRemoveBlur('bitmexScalerBlur')} ></section>
                    <div className="blur" id='bitmexScalerBlur'></div></>}
                {this.props.apiKey && this.props.apiSecret ? <ScalerInterface platform={this.state.platform} /> : <ScalerAuthentication handlePlatformChange={this.handlePlatformChange} />}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        apiKey: state.apiKeyTemporary,
        apiSecret: state.apiSecretTemporary,
    }
}

export default connect(mapStateToProps)(BitmexScaler);