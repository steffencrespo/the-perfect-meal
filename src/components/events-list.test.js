import React from 'react';
import ReactDOM from 'react-dom';
import EventsList from './events-list';

it('renders without crashing', () => {
  let section = document.createElement('section');
  ReactDOM.render(<EventsList />, section);
});