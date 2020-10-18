import React from "react";
import { Link } from "react-router-dom";

// Components

const GymCard = ({ gym }) => {
  // console.log("I'm in GymCard", gym);
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/gyms/${gym.id}`} className="card">
        <div className="image">
          {/* {gym.logo} */}
          <img className="card-img-top img-fluid" src="#" alt={gym.name} />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{gym.name}</span>
          </h5>
          <p>
            <span>{gym.address}</span>
          </p>
          {/* <small className="card-text">{gym.classes.length} classes</small> */}
        </div>
      </Link>
    </div>
  );
};
export default GymCard;
