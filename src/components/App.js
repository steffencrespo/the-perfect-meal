import React, { Component } from 'react';

import './app.css';

import Navbar from './navbar';
import Container from './container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Container name="All your events so far"/>
      </div>
    );
  }
}

export default App;
