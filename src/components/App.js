import React, { Component } from 'react';

import './App.css';

import Navbar from './navbar';
import Container from './container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Container />
      </div>
    );
  }
}

export default App;
