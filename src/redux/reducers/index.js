import { combineReducers } from "redux";

import bookingsReducer from "./bookings";
import classesReducer from "./classes";

const rootReducer = combineReducers({
  bookingsState: bookingsReducer,
  classesState: classesReducer,
});

export default rootReducer;
