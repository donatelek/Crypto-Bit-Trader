import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
class InviteFriends extends Component {
    state = {
        referralCode: '',
        referralLink: ''
    }
    componentDidMount() {
        const referralLink = `http://localhost:3000/register?ref=${this.props.referralCode}`
        this.setState({
            referralCode: this.props.referralCode,
            referralLink: referralLink
        })
    }
    handleCopyRefCode = () => {
        this.referralCodeInput.select()
        document.execCommand('copy')
        this.deselectEl(this.referralCodeInput)
        this.copyCodeIcon.style.color = 'green';
        setTimeout(() => {
            if (this.copyCodeIcon) {
                this.copyCodeIcon.style.color = 'unset';
            }
        }, 1500)
    }
    handleCopyRefLink = () => {
        this.referralLinkInput.select()
        document.execCommand('copy')
        this.deselectEl(this.referralLinkInput)
        this.copyLinkIcon.style.color = 'green';
        setTimeout(() => {
            if (this.copyLinkIcon) {
                this.copyLinkIcon.style.color = 'unset';
            }
        }, 1500)
    }
    deselectEl = (el) => {
        let element = el;
        if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
            if ('selectionStart' in element) {
                element.selectionEnd = element.selectionStart;
            }
            element.blur();
        }
        if (window.getSelection) { // All browsers, except IE <=8
            window.getSelection().removeAllRanges();
        } else if (document.selection) { // IE <=8
            document.selection.empty();
        }
    }
    render() {
        return (
            <div className="inviteFriends">
                <div className="close" onClick={this.props.handleShowInviteFriends} ><i className="fas fa-times"></i></div>
                <h1>Referral Program</h1>
                <h3>Receive $10 as Fees Bonus for every user that will register with your referral code</h3>
                <label htmlFor="">Referral Code</label>
                <br />
                <div className="codeWrapper">
                    <input ref={el => this.referralCodeInput = el} value={this.state.referralCode} type="text" readOnly />
                    <div className="copyCode" onClick={this.handleCopyRefCode}><i ref={el => this.copyCodeIcon = el} className="far fa-copy"></i></div>
                </div>
                <br />
                <label htmlFor="">Referral Link</label>
                <br />
                <div className="linkWrapper">
                    <input ref={el => this.referralLinkInput = el} value={this.state.referralLink} type="text" readOnly />
                    <div className="copyLink" onClick={this.handleCopyRefLink} ><i className="far fa-copy" ref={el => this.copyLinkIcon = el}></i></div>
                </div>
                <div className="referredInfo">
                    <ul>
                        <li>
                            <div className="number">{this.props.referralCounter}</div>
                            <div className="title">Registered Referrals</div>
                        </li>
                        <li>
                            <div className="number">${this.props.referralCounter * 10}</div>
                            <div className="title">Fees Bonus Received</div>
                        </li>
                        <li>
                            <div className="number">$0</div>
                            <div className="title">Fees Bonus Used</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        referralCode: state.referralCode,
        referralCounter: state.referralCounter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleShowInviteFriends: () => dispatch({ type: actionTypes.SHOW_INVITE_FRIENDS })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InviteFriends);