import React, { Component } from 'react';

export const MyContext = React.createContext();

export class MyProvider extends Component {

  state = {
    items: [
      {},
      {},
      {},
      {},
      {},
    ]
  }

  render() {
    return(
      <MyContext.Provider value={this.state.items}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}