export const ADD_EVENT = 'ADD_EVENT';
export const addEvent = (partyName, eventSummary, eventType, partyGuests, totalFood, totalDrinks) => ({
  type: ADD_EVENT,
  partyName,
  eventSummary,
  eventType,
  partyGuests,
  totalFood,
  totalDrinks
});

export const DELETE_EVENT = 'DELETE_EVENT';
export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  id
});

export const EDITING_EVENT = 'EDITING_EVENT';
export const editingEvent = (partyName='', eventSummary='', eventType='', partyGuests=0, totalFood=0, totalDrinks=0) => ({
  type: EDITING_EVENT,
  editing: true,
  partyName,
  eventSummary,
  eventType,
  partyGuests,
  totalFood,
  totalDrinks
});

export const DISABLE_EDITING = 'DISABLE_EDITING';
export const disableEditing = () => ({
  type: DISABLE_EDITING
});