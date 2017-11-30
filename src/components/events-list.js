import React, { Component }from 'react';
import { connect } from 'react-redux';

import EventSummary from './event-summary';

import './events-list.css';

export class EventsList extends Component  {

  listEvents() {
    this.props.events.map( (event) => {
      
    });
  }

  render() {  
      return(
        <section>
          <header role="banner">
            <h1>All your events so far</h1>
          </header>
          <EventSummary eventType='Thanksgiving' date='Nov 23 2016' name='Night in Philly' guestCount='10' food='1 12lbs turkey' drinks='5 bottles of wine' />
          <EventSummary eventType='New years' date='Jan 1 2017' name='A very merry xmas' guestCount='10' food='2lbs Lentils, Ham' drinks='5 bottles of wine, 5 dom perrignon' />
          <EventSummary eventType='Easter' date='Jan 1 2017' name='A very merry xmas' guestCount='10' food='2lbs Lentils, Ham' drinks='5 bottles of wine, 5 dom perrignon' />
        </section>
      );
    }
}

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(mapStateToProps)(EventsList);