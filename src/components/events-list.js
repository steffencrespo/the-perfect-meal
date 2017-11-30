import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventSummary from './event-summary';

import './events-list.css';

export class EventsList extends Component  {

  render() {  
    const allEvents = this.props.events.map((event) => 
      <EventSummary 
        key={event.id}
        eventType={event.eventType} 
        date='Nov 23 2017'
        name={event.partyName} 
        guestCount={event.partyGuests} 
        food='1 12lbs turkey' 
        drinks='2 bottles of wine' />
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