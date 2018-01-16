import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventSummary from './event-summary';

import './events-list.css';

export class EventsList extends Component  {

  render() {  
    const allEvents = this.props.events.map((event) => 
      <EventSummary 
        id={event.id}
        key={event.id}
        eventType={event.eventType} 
        date='Nov 23 2017'
        name={event.partyName} 
        guestCount={event.partyGuests} 
        food={event.totalFood}
        drinks={event.totalDrinks} />
    );

    return(
      <section>
        <header role="banner">
          <h1>All your events so far</h1>
        </header>
        {allEvents}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(mapStateToProps)(EventsList);