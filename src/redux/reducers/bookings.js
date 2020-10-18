import { SET_BOOKINGS } from "../actions/actionTypes";

const initialState = {
  bookings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKINGS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
