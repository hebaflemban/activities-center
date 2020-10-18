import { SET_GYMS, ADD_GYM } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GYMS:
      const gyms = action.payload;
      return gyms;
    case ADD_GYM:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default reducer;
