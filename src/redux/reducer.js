import { combineReducers } from 'redux';

import contactsReducer from './contacts/reducer';
import filterReducer from './filter/reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
