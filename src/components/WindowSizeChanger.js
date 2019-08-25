import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

class WindowSizeChanger extends Component {
    state = {}
    handleSelect = e => {
        const value = e.target.value
        this.props.handleDashboardSize(value)
    }
    render() {
        return (
            <div className="windowSizeChanger">
                <h1>Dashboard Size</h1>
                <select onChange={this.handleSelect} name="" id="">
                    <option selected={true} value="1">1x</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                </select>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleDashboardSize: (size) => dispatch({ type: actionTypes.DASHBOARD_SIZE, size }),
    }
}

export default connect(null, mapDispatchToProps)(WindowSizeChanger);