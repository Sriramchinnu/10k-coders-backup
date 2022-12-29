import React, { Component } from 'react';
import HOC from './HOC';

class Click extends Component {
    render() {
        return (
            <div>
       <button onClick={this.props.handleIncrement}>Click </button>
       <h2>You Clicked {this.props.count} times !!</h2>
      </div>
        );
    }
}

export default HOC(Click);