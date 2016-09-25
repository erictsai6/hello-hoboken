import React from 'react';
import $ from 'jquery';
import Driver from './driver.jsx';

class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            secondsElapsed: 0
        }
        this.keyUpEvent = this.keyUpEvent.bind(this);
        this.restart = this.restart.bind(this);
        // this.driver = new Driver();
    }

    keyUpEvent(e) {
        switch(e.charCode) {
            case 38:
                // UP
                break;
            case 39:
                // RIGHT
                break;
            case 40:
                // DOWN
                break;
            case 37:
                // LEFT
                break;
            default:
                break;
        }
    }

    restart() {
        console.log('eyo');
        // this.driver = new Driver();
    }

    render() {
        return (
        <div>
            <Driver></Driver>
            <button onClick={this.restart}>Restart</button>
        </div>
        );
    }

}

export default Game;