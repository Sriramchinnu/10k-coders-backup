import React, { Component } from 'react';
const HOC = (Original) => {
    class SampleComponent extends Component {
        constructor(props) {
          super(props);
    
          this.state = {
            count: 0,
          };
        }
        handleIncrement = () => {
          this.setState({ count: this.state.count + 1 });
        };
        render() {
          return (
            <Original
              count={this.state.count}
              handleIncrement={this.handleIncrement}
            />
          );
        }
      }
      return SampleComponent;
   
}

export default HOC;