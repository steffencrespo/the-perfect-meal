import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './navbar.css';

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Past Events</a></li>
        <li><a href="#">New Event</a></li>
        <li style={{ float: 'right' }}><a className="active" href="#about">Logout</a></li>
      </ul>
    </nav>
  );
}