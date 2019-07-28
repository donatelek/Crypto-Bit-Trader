import React, { Component } from 'react';

class ShortsLongsCounter extends Component {
    state = {
        shorts: '',
        longs: '',
        interval: ''
    }
    componentDidMount() {
        const interval = setInterval(() => {
            fetch('https://crypto-tool-server.herokuapp.com/position').then(res => res.json()).then(data => {
                this.setState({
                    shorts: data.shorts,
                    longs: data.longs
                })
            })
        }, 3000)
        this.setState({
            interval
        })
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        let shortsInPercentage
        let longsInPercentage
        if (this.state.shorts && this.state.longs) {
            const shortsWithLongs = Number(this.state.shorts) + Number(this.state.longs);
            shortsInPercentage = ((100 * this.state.shorts) / shortsWithLongs).toFixed(2)
            longsInPercentage = ((100 * this.state.longs) / shortsWithLongs).toFixed(2)
        }

        return (
            <div className='shortsLongsCounter'>
                {this.state.shorts && this.state.longs ? <><div className="shortsWrapper">
                    <div className="percentage">{shortsInPercentage}%</div>
                    {this.state.shorts && <div className='number'>{this.state.shorts} $</div>}
                    <h1 className='shortsTitle'>SHORTS</h1>
                </div>
                    <div className="longsWrapper">
                        <h1>LONGS</h1>
                        {this.state.longs && <div className='number'>{this.state.longs} $</div>}
                        <div className="percentage">{longsInPercentage}%</div>
                    </div></> : <><div className="loader"><i class="fas fa-circle-notch"></i></div><div className="loader"><i class="fas fa-circle-notch"></i></div></>}
            </div>
        );
    }
}

export default ShortsLongsCounter;