import React from "react";
import { Link } from "react-router-dom";

const ClassCard = ({ gymClass }) => {
  console.log("I'm in ClassCard", gymClass);
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/classes/${gymClass.id}`} className="card">
        <div className="image">
          {/* {gymClass.logo} */}
          <img className="card-img-top img-fluid" src="#" alt={gymClass.name} />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{gymClass.name}</span>
          </h5>
          <p>
            <span>{gymClass.date}</span>
          </p>
          {/* <small className="card-text">{gymClass.classes.length} classes</small> */}
        </div>
      </Link>
    </div>
  );
};
export default ClassCard;
