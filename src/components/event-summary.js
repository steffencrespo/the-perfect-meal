import React from 'react';
import { connect } from 'react-redux';
import { deleteEvent } from '../actions';

import './event-summary.css';

export function EventSummary(props) {
  return (
    <section key={ props.id }>
      <header className="flex_summary_header">
        <h2>{ props.eventType } - { props.date }</h2>
        <p>{ props.name }</p>
      </header>
      <p> Guests: { props.guestCount }</p>
      <p>For this event you needed { props.drinks } drinks and { props.food } of food</p>
      <button>Clone</button>
      <button onClick={ () => props.dispatch(deleteEvent(props.id))} >Delete</button>
    </section>
  );
}

export default connect()(EventSummary);
