import React from 'react';
import ReactDOM from 'react-dom';
import EventSummary from './event-summary';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<EventSummary />, section);
});