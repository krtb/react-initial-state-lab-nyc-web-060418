import React, { Component } from 'react';

class Bomb extends Component {
    state = {
        secondsLeft: this.props.initialCount
    }

    render() {
        let myMsg = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <div>
                {myMsg}
            </div>
        );
    }
}

export default Bomb;
