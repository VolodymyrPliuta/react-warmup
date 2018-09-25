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
      <div style = {{display: 'flex'}}>
        <p onClick = {this.onclick}>Hello Table</p>
        <p style={this.state.color}> {this.state.array}</p>
        <table style={{justifyContent: 'center'}}>
          <tr>
            <th>Fisrs Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </table>
      </div>
    )
  }
}

export default Table
