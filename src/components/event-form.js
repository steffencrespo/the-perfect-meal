import React from 'react';
import './event-form.css';

export default function EventForm(props) {
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
      <section>
        <header>
          <h3>You are going to need</h3>
          <p>12 lbs of Turkey</p>
          <p>5 gallons of drinks</p>
        </header>
      </section>
      <section>
        <button type="cancel">Cancel</button>
        <button type="submit">Save</button>
        <button type="cancel">Delete</button>
      </section>
    </div>
  );
}