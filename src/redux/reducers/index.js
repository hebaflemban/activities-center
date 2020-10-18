import { combineReducers } from "redux";

import bookingsReducer from "./bookings";
import classesReducer from "./classes";
import gymsReducer from "./gyms";

const rootReducer = combineReducers({
  bookingsState: bookingsReducer,
  classesState: classesReducer,
  gymsState: gymsReducer,
});

export default rootReducer;
