import * as actions from '../actions';

const initialState = {
  events: [{
    'partyName': 'Create your own party',
    'eventSummary': 'This is the most wonderful time of the year.',
    'eventType': 'Thanksgiving',
    'partyGuests': 5
  }]
};

export const eventReducer = (state = initialState, action) => {
  if(action.type === actions.ADD_EVENT) {
    return Object.assign({}, state, {
      events: [...state.events, {
        partyName: action.partyName,
        eventSummary: action.eventSummary,
        eventType: action.eventType,
        partyGuests: action.partyGuests
      }]
    });
  }
  return state;
}