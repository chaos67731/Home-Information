import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }
    
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if(time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({ days, hours, minutes, seconds });
        }
    }

    render() {
        return(
            <ul id="timer">
                <li><span id="days">{this.leading0(this.state.days)} Days</span> </li>
                <li><span id="hours">{this.leading0(this.state.hours)} Hours</span> </li>
                <li><span id="minutes">{this.leading0(this.state.minutes)} Minutes</span> </li>
                {/*<li><span id="seconds">{this.leading0(this.state.seconds)} Seconds</span> </li>*/}
            </ul>
        );
    }
}
export default Clock;
