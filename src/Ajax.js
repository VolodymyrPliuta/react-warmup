import React, { Component } from 'react'

class Ajax extends Component {
  constructor() {
    super();
    this.state = {
      ajax: 'Will be fethced'
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums/1')
      .then(response => response.json())
      .then(json => {
        this.setState({
          ajax: JSON.stringify(json)
        })
      })
  }
  render() {
    return(
      <div>
        <p>{this.state.ajax} </p>
      </div>
    )
  }
}

export default Ajax
