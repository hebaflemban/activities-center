import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// Components
// import BookTable from "./BookTable";
// import AddBookModal from "./AddBookButton";
// import Loading from "./Loading";
// import ImageWithPlaceHolder from "./ImageWithPlaceHolder";

const GymDetails = ({ gyms, classes }) => {
  const { gymID } = useParams();
  console.log("I'm in GymDetails", gyms, classes, gymID);

  //   if (loading) return <Loading />;

  const gym = gyms.find((gym) => gym.id === +gymID);

  if (!gym) return <Redirect to="/" />;

  const gymClasses = classes.filter((gymClass) => gymClass.gym.id === +gymID);

  return (
    <div className="author">
      <div>
        <h3>{gym.name}</h3>
        <img src="#" className="img-thumbnail img-fluid" alt={gym.name} />
      </div>
      <ClassesList classes={gymClasses} />
      {/* {user && <AddClassModal gymID={gym.id} />} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gyms: state.gymsState,
    classes: state.classesState,
  };
};

export default connect(mapStateToProps)(GymDetails);
