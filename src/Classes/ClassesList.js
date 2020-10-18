import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// Components
import ClassCard from "./ClassCard";
import SearchBar from "../SearchBar";
// import Loading from "../Loading";
import AddClassCard from "./AddClassButton";

const ClassesList = ({ classes, loading, user }) => {
  console.log("I'm in ClassesList ", classes);
  const [query, setQuery] = useState("");
  const type = useParams().type;

  const filterClasses = () => {
    return classes.filter((gymClass) => {
      return `${gymClass.title}`.toLowerCase().includes(query.toLowerCase());
    });
  };

  if (type) {
    classes = classes.filter((gymClass) => gymClass.type === type);
  }

  //   if (loading) return <Loading />;

  const ClassCards = filterClasses().map((gymClass) => (
    <ClassCard key={gymClass.id} gymClass={gymClass} />
  ));

  return (
    <div className="gyms">
      <h3>Classes</h3>
      <SearchBar onChange={setQuery} />
      <div className="row">
        <AddClassCard />
        {ClassCards}
      </div>
    </div>
  );
};

const mapStateToProps = ({ gymsState, classesState }) => ({
  gyms: gymsState,
  classes: classesState,
});

export default connect(mapStateToProps)(ClassesList);
