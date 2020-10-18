import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { addClass } from "../redux/actions";

const ClassForm = ({ gymID, closeModal, addClass, gyms }) => {
  console.log("I'm in ClassForm", addClass);

  const [gymClass, setClass] = useState({
    title: "",
    type: "",
    date: "",
    time: "",
    isFree: true,
    capacity: 0,
    gym: gyms[gymID],
  });

  const submitClass = (event) => {
    event.preventDefault();
    addClass(gymClass, closeModal);
  };

  const onTextchange = (event) =>
    setClass({ ...gymClass, [event.target.name]: event.target.value });

  return (
    <div className="mt-5 p-2">
      <form onSubmit={submitClass}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Title</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={onTextchange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"> Type</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="type"
            onChange={onTextchange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"> Date</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="date"
            onChange={onTextchange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"> Time</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="time"
            onChange={onTextchange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"> Type</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="type"
            onChange={onTextchange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"> Cost</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="isFree"
            onChange={onTextchange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"> Capacity</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="Capacity"
            onChange={onTextchange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    gyms: state.gymsState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addClass: (newClass, closeModal) =>
      dispatch(addClass(newClass, closeModal)),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(ClassForm);
