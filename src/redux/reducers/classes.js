import { SET_CLASSES, ADD_CLASS } from "../actions/actionTypes";

const initialState = {
  classes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLASSES:
      return action.payload;
    case ADD_CLASS:
      return [action.payload, ...state];

    default:
      return state;
  }
};

export default reducer;
