export const ADD_EVENT = 'ADD_EVENT';
export const addEvent = (partyName, eventSummary, eventType, partyGuests) => ({
  type: ADD_EVENT,
  partyName,
  eventSummary,
  eventType,
  partyGuests
});