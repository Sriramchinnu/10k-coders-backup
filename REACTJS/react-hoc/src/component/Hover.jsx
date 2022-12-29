import React, { Component } from 'react';
import HOC from './HOC';

class Hover extends Component {
    render() {
        return (
            <div>
       <button onMouseOver={this.props.handleIncrement}>Click </button>
       <h2>You Hovered {this.props.count} times !!</h2>
      </div>
        );
    }
}

export default HOC(Hover);