import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './app.css';

import Navbar from './navbar';
import Container from './container';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
            <main role="main" className="events-list">
              <Container />
            </main>
          </div>
      </Router>
    );
  }
}

export default App;
