import React from 'react';
import './event-form.css';

import EventSummary from './event-summary';

export default function EventForm(props) {

  function showEstimates() {
    if (true) {
      return <EventSummary eventType='Thanksgiving' date='Nov 23 2017' name='Last time in Philly' guestCount='5' food='1 12lbs turkey' drinks='2 bottles of wine' />;
    }
  }

  return(
    <div>
      <header>
        <h1>Let's Have a Party</h1>
      </header>
      <section>
        <form id="create-party">
          <div className="form-section">
            <label htmlFor="party-name">Name your event</label>
            <input type="text" name="party-name" placeholder="name this event" required />
          </div>
          <div className="form-section">
            <label htmlFor="event-summary">Add your notes</label>
            <textarea name="event-summary" rows="5" placeholder="Uncle Ben is vegan. Aunt Annie likes whiskey."  required></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="party-type">What is the occasion?</label>
            <select name="party-type">
              <option value="thanksgiving">Thanksgiving</option>
              <option value="easter">Easter</option>
            </select> 
          </div>
          <div className="form-section">
            <label htmlFor="party-guests">How many guests are coming?</label>
            <input type="number" name="party-guests" min="0" max="999" required />
          </div>
        </form>
      </section>
      {showEstimates()}
    </div>
  );
}