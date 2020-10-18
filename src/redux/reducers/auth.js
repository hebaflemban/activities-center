import { LOGIN, LOGOUT } from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
