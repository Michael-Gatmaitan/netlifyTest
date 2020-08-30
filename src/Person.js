import React, { Component } from 'react';
import { MyContext } from './MyProvider';

class Person extends Component {
  render() {
    
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <p>Loaded: {new Date().setMinutes(0)}</p>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Person;