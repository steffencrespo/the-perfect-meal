import { createStore } from 'redux';

import { eventReducer } from './reducers';

export default createStore(eventReducer);
