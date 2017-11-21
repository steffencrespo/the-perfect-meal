import React from 'react';

import './container.css';

import EventSummary from './event-summary';

export default function Container(props) {
  return (
    <main role="main" className="events-list">
      <header role="banner">
        <h1>{props.name}</h1>
      </header>
      <section>
        <EventSummary eventType='Thanksgiving' date='Nov 23 2016' name='Night in Philly' guestCount='10' food='1 12lbs turkey' drinks='5 bottles of wine' />
        <EventSummary eventType='New years' date='Jan 1 2017' name='A very merry xmas' guestCount='10' food='2lbs Lentils, Ham' drinks='5 bottles of wine, 5 dom perrignon' />
      </section>
    </main>
  );
}