import { SET_CLASSES } from "../actions/actionTypes";

const initialState = {
  classes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLASSES:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
