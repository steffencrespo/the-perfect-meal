import React from 'react';

import './event-summary.css';

export default function EventSummary(props) {
  return (
    <section key={ props.index }>
      <header className="flex_summary_header">
        <h2>{ props.eventType } - { props.date }</h2>
        <p>{ props.name }</p>
      </header>
      <p> Guests: { props.guestCount }</p>
      <p>For this event you needed { props.drinks } drinks and { props.food } of food</p>
      <button>Clone</button>
      <button>Delete</button>
    </section>
  );
}