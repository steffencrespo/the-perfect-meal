export const ADD_EVENT = 'ADD_EVENT';
export const addEvent = (partyName, eventSummary, eventType, partyGuests) => ({
  type: ADD_EVENT,
  partyName,
  eventSummary,
  eventType,
  partyGuests
});

export const DELETE_EVENT = 'DELETE_EVENT';
export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  id
});

export const EDITING_EVENT = 'EDITING_EVENT';
export const editingEvent = (partyName='', eventSummary='', eventType='', partyGuests=0) => ({
  type: EDITING_EVENT,
  editing: true,
  partyName,
  eventSummary,
  eventType,
  partyGuests
});