import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './container.css';

import EventsList from './events-list';
import LandingPage from './landing-page';
import EventForm from './event-form';

export default function Container(props) {
  return (
    <main role="main" className="main">
      <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route exact path="/events-list" component={ EventsList } />
        <Route exact path="/new-event" component={ EventForm } />
      </Switch>
    </main>
  );
}