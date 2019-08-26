import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
class Subscriptions extends Component {
    state = {}
    render() {
        return (
            <div className="subscriptions">
                <div className="close" onClick={this.props.handleShowSubscriptions} ><i class="fas fa-times"></i></div>
                <h1 className='subscriptionTitle'>Subscriptions</h1>
                <div className="standard">
                    <h1>Standard Package</h1>
                    <h2>FREE</h2>
                    <div>Trade without commission</div>
                    <div>All features are available</div>
                    <div>24/7 Support</div>
                    <button disabled={true} >Active</button>
                </div>
                <div className="promoCode">
                    <h1>Promocode</h1>
                    <input type="text" placeholder='Enter your promo code' />
                    <br />
                    <input type="submit" value="Apply" />
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleShowSubscriptions: () => dispatch({ type: actionTypes.SHOW_SUBSCRIPTIONS }),
    }
}
export default connect(null, mapDispatchToProps)(Subscriptions);