import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

function App({ classes }) {
  console.log("hiii", classes);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{classes[0].title}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
