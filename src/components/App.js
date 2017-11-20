import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './navbar';

import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
      </Router>
    );
  }
}

export default App;
