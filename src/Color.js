import React, { Component } from 'react'

class Color extends Component {
  constructor() {
    super();
    this.state = {
      rainbow: {
        green: 'green',
        yellow: 'yellow',
        blue: 'blue'
      }
    }
  }
  render() {
    return(
      <p style={{color: this.state.rainbow.green}}> Green is green</p>
    )
  }
}

export default Color
