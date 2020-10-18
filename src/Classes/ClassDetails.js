import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import AddClassButton from "./AddClassButton";

// Components
// import BookTable from "./BookTable";
// import AddBookModal from "./AddBookButton";
// import Loading from "./Loading";
// import ImageWithPlaceHolder from "./ImageWithPlaceHolder";

const ClassDetails = ({ gyms, classes }) => {
  const { classID } = useParams();
  console.log("I'm in ClassDetails", gyms, classes, classID);

  //   if (loading) return <Loading />;

  const gymClass = classes.find((gymClass) => gymClass.id === +classID);

  if (!gymClass) return <Redirect to="/" />;

  // const gymClasses = classes.filter((gymClass) => gymClass.gym.id === +classID);

  return (
    <div className="author">
      <div>
        <h3>{gymClass.name}</h3>
        <img src="#" className="img-thumbnail img-fluid" alt={gymClass.name} />
      </div>
      <div>
        <p>{gymClass.date}</p>
        <p>{gymClass.time}</p>
        <p>{gymClass.isFree}</p>
        <p>{gymClass.type}</p>
        <p>{gymClass.capacity}</p>
        <p>by: {gymClass.gym.name}</p>
      </div>
      {<AddClassButton />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gyms: state.gymsState,
    classes: state.classesState,
  };
};

export default connect(mapStateToProps)(ClassDetails);
