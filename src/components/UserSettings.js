import React, { Component } from 'react';
import PasswordChanger from './PasswordChanger'
import LanguageSettings from './LanguageSettings'
import LoginInfoSettings from './LoginInfoSettings'
import ReferralInfoSettings from './ReferralInfoSettings'
import AddressSettings from './AddressSettings'
import ApiSettings from './ApiSettings'
import TwoFactorAuth from './TwoFactorAuth'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
import WindowSizeChanger from './WindowSizeChanger'

class UserSettings extends Component {
    state = {}
    render() {
        return (
            <div className='userSettings'>
                <h1 className='settingsTitle'>Settings</h1>
                <div className="close" onClick={this.props.handleShowUserSettings} ><i class="fas fa-times"></i></div>
                <div className="settingsWrapper">
                    <div className='firstSectWrapper'>
                        <PasswordChanger />
                        <LoginInfoSettings />
                    </div>
                    <div className="secSectWrapper">
                        <LanguageSettings />
                        <TwoFactorAuth />
                        <ReferralInfoSettings />
                        <WindowSizeChanger />
                    </div>
                    <div className="thirdSectWrapper">
                        <ApiSettings />
                        <AddressSettings />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleShowUserSettings: () => dispatch({ type: actionTypes.SHOW_USER_SETTINGS }),
    }
}

export default connect(null, mapDispatchToProps)(UserSettings);