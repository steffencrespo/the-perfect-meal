import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export default function Navbar(props) {
  return (
    <ul className="nav">
      <li><Link to="/new-event"><i className="fa fa-spoon"></i>New Event </Link></li>
      <li><Link to="/events-list"><i className="fa fa-history"></i>Past Events </Link></li>
      <li style={{ float: 'right' }}><a className="active" href="#about">Logout</a></li>
    </ul>
  );
}