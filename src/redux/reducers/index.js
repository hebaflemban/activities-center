import {combineReducers} from "redux";

import bookingsReducer from "./bookings"

const rootReducer = combineReducers({
  bookingsState: bookingsReducer,
})

export default rootReducer
