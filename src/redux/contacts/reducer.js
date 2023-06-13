import defaultContacts from 'data/defaultContacts';
import localStorage from 'localStorage';
import { ADD, DELETE } from './types';

// ##################################

const initialState = localStorage.load() ?? defaultContacts;

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

export default contactsReducer;
