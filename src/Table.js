import React, { Component } from 'react';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      array: ['Hello', 'World'],
      color: {color: 'red'}
    }
  }

  onclick = () => {
    this.setState(
      {array: ['Just', 'Hello']}
    )
    console.log("Hi there")
  }

  render() {
    return(
      <div>
        <p onClick = {this.onclick}>Hello Table</p>
        <p style={this.state.color}> {this.state.array}</p>
      </div>
    )
  }
}

export default Table
