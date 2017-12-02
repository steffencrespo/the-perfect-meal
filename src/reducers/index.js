import * as actions from '../actions';

const initialState = {
  events: [{
    'id': '0',
    'partyName': 'Create your own party',
    'eventSummary': 'This is the most wonderful time of the year.',
    'eventType': 'Thanksgiving',
    'partyGuests': 5
  }],
  editing: false,
  unsavedEvent: {
    'id': '0',
    'partyName': '',
    'eventSummary': '',
    'eventType': '',
    'partyGuests': 0
  }
};

export const eventReducer = (state = initialState, action) => {
  console.log('here');
  if (action.type === actions.ADD_EVENT) {
    console.log(action);
    return Object.assign({}, state, {
      events: [...state.events, {
        id: Math.floor((1 + Math.random()) * 0x10000),
        partyName: state.unsavedEvent.partyName,
        eventSummary: state.unsavedEvent.eventSummary,
        eventType: state.unsavedEvent.eventType,
        partyGuests: state.unsavedEvent.partyGuests
      }]
    });
  }
  else if (action.type === actions.DELETE_EVENT) {
    console.log(action);
    return Object.assign({}, state, {
      events: [...state.events.filter( event => event.id === action.id)]
    })
  }
  else if (action.type === actions.EDITING_EVENT) {
    console.log(action);
    console.log(state.unsavedEvent);
    return Object.assign({}, state, { 
      editing: true, 
      unsavedEvent: {
        partyName: action.partyName,
        eventSummary: action.eventSummary,
        eventType: action.eventType,
        partyGuests: action.partyGuests
      } 
    });
  }
  return state;
}