import React from 'react';
import { connect } from 'react-redux';
import { addEvent, deleteEvent } from '../actions';

import './event-summary.css';

export function EventSummary(props) {

  function saveEvent() {
    props.dispatch(
      addEvent(
        props.unsavedEvent.partyName, 
        props.unsavedEvent.eventSummary, 
        props.unsavedEvent.eventType, 
        props.unsavedEvent.partyGuests,
        props.unsavedEvent.totalFood,
        props.unsavedEvent.totalDrinks
      ));
    props.history.push("/events-list");
  }

  return (
    <section id={ props.id }>
      <header className="flex_summary_header">
        <h2>{ props.eventType } - { props.date }</h2>
        <p>{ props.name }</p>
      </header>
      <p> Guests: { props.guestCount }</p>
      <p>For this event you needed { props.drinks } and { props.food }.</p>
      <button hidden={!props.editing} onClick={() => saveEvent()}>Save</button>
      <button onClick={() => props.dispatch(deleteEvent(props.id))} >Delete
      </button>
    </section>
  );
}

const mapStateToProps = state => ({
  editing: state.editing,
  unsavedEvent: state.unsavedEvent
});

export default connect(mapStateToProps)(EventSummary);
