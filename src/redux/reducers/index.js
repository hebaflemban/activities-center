import { combineReducers } from "redux";

import bookingsReducer from "./bookings";
import classesReducer from "./classes";
import gymsReducer from "./gyms";
import userReducer from "./auth";

const rootReducer = combineReducers({
  bookingsState: bookingsReducer,
  classesState: classesReducer,
  gymsState: gymsReducer,
  userState: userReducer,
});

export default rootReducer;
