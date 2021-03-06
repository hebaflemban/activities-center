import React from "react";
import "./App.css";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import GymsList from "./Gym/GymsList";
import ClassesList from "./Classes/ClassesList";
import LoginForm from "./LoginForm";

import { Switch, Route } from "react-router-dom";
import ClassDetails from "./Classes/ClassDetails";
import GymDetails from "./Gym/GymDetails";
import BookingsList from "./Profile";

function App({ classes }) {
  // console.log("hiii", classes);

  // navbar
  //cata
  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route path="/bookings/:userID">
            <BookingsList />
          </Route>
          <Route path="/classes/:classID">
            <ClassDetails />
          </Route>
          <Route path="/categories/:type?">
            <ClassesList />
          </Route>
          <Route path="/classes/">
            <ClassesList />
          </Route>

          <Route path="/gyms/:gymID">
            <GymDetails />
          </Route>
          <Route path="/gyms">
            <GymsList />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

const mapStatesToProps = (state) => {
  return {
    gyms: state.gymsState,
    classes: state.classesState,
    bookings: state.bookingsState,
  };
};

export default connect(mapStatesToProps)(App);
