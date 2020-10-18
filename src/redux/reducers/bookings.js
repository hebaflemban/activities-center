import { SET_BOOKINGS, BOOK } from "../actions/actionTypes";

const initialState = {
  bookings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKINGS:
      return action.payload;
    case BOOK:
      return [action.payload, ...state];

    default:
      return state;
  }
};

export default reducer;
