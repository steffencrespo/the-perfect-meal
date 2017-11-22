import React from 'react';
import EventSummary from './event-summary';

import './events-list.css';

export default function EventsList(props) {
  return(
    <section>
      <EventSummary eventType='Thanksgiving' date='Nov 23 2016' name='Night in Philly' guestCount='10' food='1 12lbs turkey' drinks='5 bottles of wine' />
      <EventSummary eventType='New years' date='Jan 1 2017' name='A very merry xmas' guestCount='10' food='2lbs Lentils, Ham' drinks='5 bottles of wine, 5 dom perrignon' />
      <EventSummary eventType='Easter' date='Jan 1 2017' name='A very merry xmas' guestCount='10' food='2lbs Lentils, Ham' drinks='5 bottles of wine, 5 dom perrignon' />
    </section>
  );
}

