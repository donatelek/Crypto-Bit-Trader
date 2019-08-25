import React, { Component } from 'react';
class InfoAboutUpdates extends Component {
    state = {}
    render() {
        return (
            <div className="infoAboutUpdates">
                <h1>Announcements and Updates</h1>
                <div className="update">
                    <h1>Update v0.2 Changelog</h1>
                    <div className="date">August 25, 9:30 PM</div>
                    <section>
                        <article className="added">
                            <h1>Added:</h1>
                            <ul>
                                <li>- Subscription section</li>
                                <li>- Referral program</li>
                                <li>- Two factor Authentication</li>
                                <li>- Possibility to change password</li>
                                <li>- Possibility to save your api keys</li>
                                <li>- Possibility to update your billing address</li>
                                <li>- Session info</li>
                                <li>- Possibility to change screen height</li>
                            </ul>
                        </article>
                        <article className="fixed">
                            <h1>Fixed:</h1>
                            <ul>
                                <li>- Unable to write in tools while unlocked dragging</li>
                                <li>- Chat errors while sending message</li>
                            </ul>
                        </article>
                        <article className="upcoming">
                            <h1>Upcoming Changes:</h1>
                            <ul>
                                <li>- Bitmex Positions tool</li>
                                <li>- Bitmex Order Creator tool</li>
                                <li>- Programmable buttons in calculator</li>
                                <li>- Bitmex Account Info</li>
                                <li>- Light / Dark Mode</li>
                                <li>- New Subscription options</li>
                                <li>- New language - Polish</li>
                            </ul>
                        </article>
                    </section>
                </div>
            </div>
        );
    }
}

export default InfoAboutUpdates;