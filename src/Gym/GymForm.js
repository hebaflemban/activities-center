import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { addGym } from "../redux/actions";

const GymForm = ({ closeModal, addGym }) => {
  console.log("I'm in GymForm", addGym);

  const [gym, setGym] = useState({
    name: "",
    address: "",
  });

  const submitGym = (event) => {
    event.preventDefault();
    addGym(gym, closeModal);
  };

  const onTextchange = (event) =>
    setGym({ ...gym, [event.target.name]: event.target.value });

  return (
    <div className="mt-5 p-2">
      <form onSubmit={submitGym}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Gym Name</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={onTextchange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"> Address</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="address"
            onChange={onTextchange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGym: (newGym, closeModal) => dispatch(addGym(newGym, closeModal)),
  };
};

export default connect(null, mapDispatchToProps)(GymForm);
