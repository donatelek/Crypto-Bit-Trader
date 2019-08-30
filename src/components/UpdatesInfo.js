import React, { Component } from 'react';
import InfoAboutUpdates from './InfoAboutUpdates'
class UpdatesInfo extends Component {
    state = {}
    render() {
        return (
            <div className="updatesInfo">
                <div className="bullhornIcon">
                    <i className="fas fa-bullhorn"></i>
                </div>
                <InfoAboutUpdates />
            </div>
        );
    }
}

export default UpdatesInfo;