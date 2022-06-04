import { Component } from "react";

import './index.css';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        console.log("constructor called");
    }
    render() {
        const {date} = this.state;
        console.log("render called",date);
        return(
            <div>
                <h1>Clock</h1>
                <p>{date.toLocaleTimeString()}</p>
            </div>
        );
    }
    componentDidMount() {
        console.log("componentDidMount called");
        this.timerID = setInterval(this.tick, 1000)
    }

    tick = () => {
        this.setState({date: new Date()})
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("componentWillUnmount called");
    }
}

export default Clock;