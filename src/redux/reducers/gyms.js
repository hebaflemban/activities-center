import { SET_GYMS, ADD_GYM } from "../actions/actionTypes";

const initialState = {
  gyms: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GYMS:
      return action.payload;
    case ADD_GYM:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default reducer;
