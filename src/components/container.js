import React from 'react';

import './container.css';

export default function Container(props) {
  return (
    <main role="main" className="events-list">
      <header role="banner">
        <h1>All your events so far</h1>
      </header>
      <section>
        <header>
          <h2>Thanksgiving Nov 23 2016</h2>
          <p>Name you entered for the event</p>
        </header>
        <p>You had 10 guests</p>
        <p>For this event you needed 5 gallons of drinks and 12 lbs of food</p>
        <button>Clone</button>
        <button>Delete</button>
      </section>
      <section>
        <header>
          <h2>New Year's Jan 1 2017</h2>
          <p>Name you entered for the event</p>
        </header>
        <p>You had 10 guests</p>
        <p>For this event you needed 15 gallons of drinks and 20 lbs of food</p>
        <button>Clone</button>
        <button>Delete</button>
      </section>
    </main>
  );
}