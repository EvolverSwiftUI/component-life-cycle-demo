import {Component} from 'react';
import Clock from './components/Clock';


import './App.css';

class App extends Component {
  state = {showClock: false};

  onToggleClock = () => {
    this.setState( prevState => {
      const {showClock} = prevState;
      return {
          showClock: !showClock,
        }
    })
  }

  render() {
    const {showClock} = this.state;
    return(
      <div>
        <button onClick={this.onToggleClock}>
          { showClock ? "Hide Clock" : "Show Clock" }
        </button>
        <Clock />
      </div>
    )
  }
}

export default App;
