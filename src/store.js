import { createStore } from 'react-redux';

import { eventReducer } from './reducers';

export default createStore(eventReducer);
