import { AUTHENTICATE, LOGOUT } from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
