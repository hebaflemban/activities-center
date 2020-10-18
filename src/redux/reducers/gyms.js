import { SET_GYMS } from "../actions/actionTypes";

const initialState = {
  gyms: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GYMS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
