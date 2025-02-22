import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

class RateUs extends Component {
    state = {
        showRateUs: true
    }
    handleShowRateUs = () => {
        setTimeout(() => {
            this.props.handleCloseRateUs()
        }, 1000)
    }
    render() {
        return (
            <>
                {!this.props.closeRateUs && <div className="rateUs">
                    <fieldset className="starability-heart">
                        <legend>Rate Us!</legend>
                        <input type="radio" id="no-rate-heart" className="input-no-rate" name="rating" value="0" aria-label="No rating." />
                        <input type="radio" onClick={this.handleShowRateUs} id="heart-rate1" name="rating" value="1" />
                        <label htmlFor="heart-rate1" title="Terrible">1 star</label>
                        <input type="radio" onClick={this.handleShowRateUs} id="heart-rate2" name="rating" value="2" />
                        <label htmlFor="heart-rate2" title="Not good">2 stars</label>
                        <input type="radio" onClick={this.handleShowRateUs} id="heart-rate3" name="rating" value="3" />
                        <label htmlFor="heart-rate3" title="Average">3 stars</label>
                        <input type="radio" onClick={this.handleShowRateUs} id="heart-rate4" name="rating" value="4" />
                        <label htmlFor="heart-rate4" title="Very good">4 stars</label>
                        <input type="radio" onClick={this.handleShowRateUs} id="heart-rate5" name="rating" value="5" />
                        <label htmlFor="heart-rate5" title="Amazing">5 stars</label>
                        <span className="starability-focus-ring"></span>
                    </fieldset>
                </div>}
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        closeRateUs: state.closeRateUs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleCloseRateUs: () => dispatch({ type: actionTypes.CLOSE_RATE_US }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RateUs);