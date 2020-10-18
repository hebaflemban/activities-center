import React from "react";
import "./App.css";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import GymsList from "./Gym/GymsList";
import LoginForm from "./LoginForm"
import { Switch, Route } from "react-router-dom";

function App({ classes }) {
  // console.log("hiii", classes);

  // navbar
  //cata
  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
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
