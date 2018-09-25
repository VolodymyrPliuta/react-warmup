import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './First';
import Table from './Table';
import Color from './Color';
import Ajax from './Ajax';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <First />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Table />
          <Color />
          <Ajax />
      </div>
    );
  }
}

export default App;
