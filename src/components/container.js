import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './container.css';

import EventsList from './events-list';

export default function Container(props) {
  return (
    <main role="main" className="main">
      <EventsList name="All your events so far" />
    </main>
  );
}