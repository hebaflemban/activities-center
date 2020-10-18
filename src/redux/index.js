import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {fetchBookings} from "./actions";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchBookings());

export default store;
