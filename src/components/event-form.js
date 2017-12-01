import React, { Component } from 'react';
import { connect } from 'react-redux';
import './event-form.css';

import EventSummary from './event-summary';
import { addEvent, editingEvent } from '../actions';

export class EventForm extends Component {
  constructor(props) {
    super(props);
  }

  showEstimates() {
    const event = this.props.unsavedEvent;
    if (event !== undefined) {
      return(
              <EventSummary 
                eventType={event.eventType} 
                date='Nov 23 2017'
                name={event.partyName} 
                guestCount={event.partyGuests} 
                food='1 12lbs turkey' 
                drinks='2 bottles of wine' />);
    }
  }

  // ---- Calculating Estimates ----
  // when the form is filled up, then it calculates the totals for that specific event type
  // once the calculation is done it renders/rerenders the EventSummary component with the correct values

  // ---- Deleting an event ----
  // when the delete button is clicked it 
  // - removes the event from the screen
  // - redirects to the list of events
  // - submits the cancel to the backend

  handleSubmit(e) {
    e.preventDefault();
    const partyInfo = {
      partyName: this.partyName.value,
      eventSummary: this.eventSummary.value,
      eventType: this.eventType.value,
      partyGuests: this.partyGuests.value
    }

    this.props.dispatch(addEvent(partyInfo.partyName, partyInfo.eventSummary, partyInfo.eventType, partyInfo.partyGuests))
  }

  handleEventInProgress() {
    const partyInfo = {
      partyName: this.partyName.value,
      eventSummary: this.eventSummary.value,
      eventType: this.eventType.value,
      partyGuests: this.partyGuests.value
    }
    this.props.dispatch(editingEvent(partyInfo.partyName, partyInfo.eventSummary, partyInfo.eventType, partyInfo.partyGuests))
  }

  render() {
      return(
        <div>
          <header>
            <h1>Let's Have a Party</h1>
          </header>
          <section>
            <form id="create-party" onSubmit={ e => this.handleSubmit(e) } onChange={ () =>  this.handleEventInProgress() }>
              <div className="form-section">
                <label htmlFor="party-type">What is the occasion?</label>
                <select name="party-type" ref={ (option) => this.eventType = option } >
                  <option value="thanksgiving">Thanksgiving</option>
                  <option value="easter">Easter</option>
                </select> 
              </div>
              <div className="form-section">
                <label htmlFor="party-name">Name your event</label>
                <input type="text" name="party-name" placeholder="name this event" required ref={ (input) => this.partyName = input } />
              </div>
              <div className="form-section">
                <label htmlFor="event-summary">Add your notes</label>
                <textarea name="event-summary" rows="5" 
                  placeholder="Uncle Ben is vegan. Aunt Annie likes whiskey." 
                  required ref={ (textarea) => this.eventSummary = textarea } >
                </textarea>
              </div>
              <div className="form-section">
                <label htmlFor="party-guests">How many guests are coming?</label>
                <input type="number" name="party-guests" min="0" max="999" required ref={ (input) => this.partyGuests = input } />
                <input type="submit" value="Submit" />
              </div>
            </form>
          </section>
          {this.showEstimates()}
        </div>
      );
    }
}

const mapStateToProps = state => ({
  events: state.events,
  unsavedEvent: state.unsavedEvent
});

export default connect(mapStateToProps)(EventForm);