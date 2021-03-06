import * as actions from '../actions';

const initialState = {
  events: [{
    'id': '0',
    'partyName': 'Create your own party',
    'eventSummary': 'This is the most wonderful time of the year.',
    'eventType': 'Thanksgiving',
    'partyGuests': 5,
    'totalFood': '5 lbs of food',
    'totalDrinks': '5 drinks per hour'
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
  if (action.type === actions.ADD_EVENT) {
    console.log(action);
    return Object.assign({}, state, {
      editing: false,
      events: [...state.events, {
        id: Math.floor((1 + Math.random()) * 0x10000),
        partyName: state.unsavedEvent.partyName,
        eventSummary: state.unsavedEvent.eventSummary,
        eventType: state.unsavedEvent.eventType,
        partyGuests: state.unsavedEvent.partyGuests,
        totalFood: state.unsavedEvent.totalFood,
        totalDrinks: state.unsavedEvent.totalDrinks
      }]
    });
  }
  else if (action.type === actions.DELETE_EVENT) {
    console.log(action);
    console.log(action.id);
    return Object.assign({}, state, {
      events: [...state.events.filter( event => event.id !== action.id)]
    })
  }
  else if (action.type === actions.EDITING_EVENT) {
    return Object.assign({}, state, { 
      editing: true, 
      unsavedEvent: {
        partyName: action.partyName,
        eventSummary: action.eventSummary,
        eventType: action.eventType,
        partyGuests: action.partyGuests,
        totalFood: calculateMealEstimate(action.eventType, action.partyGuests).food,
        totalDrinks: calculateMealEstimate(action.eventType, action.partyGuests).drinks
      } 
    });
  }
  else if (action.type === actions.DISABLE_EDITING) {
    return Object.assign({}, state, {
      editing: false,
      unsavedEvent: {}
    });
  }
  return state;
}

let calculateMealEstimate = (eventType, guests) => {
  let result;
  alert(eventType);
  if (eventType === 'thanksgiving') {
    result = thanksgivingEstimate(guests);
  }
  else result = easterEstimate(guests);

  return result;
}

let easterEstimate = (guests) => {
  return {food: `${guests*1} lbs of food for rabbit`, drinks: `${guests*1} per hour`};
}

let thanksgivingEstimate = (guests) => {
  return {food: `${guests*1} lbs of food for thanks`, drinks: `${guests*1} per hour`};
}