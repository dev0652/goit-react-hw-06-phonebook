import { UPD } from './types';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case UPD:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
