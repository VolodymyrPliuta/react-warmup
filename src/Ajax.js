import React, { Component } from 'react'

class Ajax extends Component {
  constructor() {
    super();
    this.state = {
      ajax: 'Will be fethced'
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        this.setState({
          ajax: json.title
        })
      })
  }
  render() {
    return(
      <div>
         
      </div>
    )
  }
}

export default Ajax
