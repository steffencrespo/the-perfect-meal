import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/events-list">Past Events </Link></li>
        <li><Link to="/new-event">New Event </Link></li>
        <li style={{ float: 'right' }}><a className="active" href="#about">Logout</a></li>
      </ul>
    </nav>
  );
}