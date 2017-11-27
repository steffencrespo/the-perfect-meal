export const ADD_EVENT = 'ADD_EVENT';
export const addEvent = (name, summary, eventType, guests) => ({
  type: ADD_EVENT,
  name,
  summary,
  eventType,
  guests
});