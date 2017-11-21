import React from 'react';

import './event-summary.css';

export default function EventSummary(props) {
  return (
    <section>
      <header>
        <h2>{ props.eventType } - { props.date }</h2>
        <p>{ props.name }</p>
      </header>
      <p>{ props.guestCount }</p>
      <p>For this event you needed { props.drinks } drinks and { props.food } of food</p>
      <button>Clone</button>
      <button>Delete</button>
    </section>
  );
}