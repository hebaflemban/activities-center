import React, { useState } from "react";
import { connect } from "react-redux";

// Components
import GymCard from "./GymCard";
import SearchBar from "../SearchBar";
// import Loading from "../Loading";
import AddGymCard from "./AddGymCard";

const GymsList = ({ gyms, loading, user }) => {
  console.log("I'm in GymList ", gyms);
  const [query, setQuery] = useState("");

  const filterGyms = () => {
    return gyms.filter((gym) => {
      return `${gym.name}`.toLowerCase().includes(query.toLowerCase());
    });
  };

  //   if (loading) return <Loading />;

  const GymCards = filterGyms().map((gym) => (
    <GymCard key={gym.id} gym={gym} />
  ));

  return (
    <div className="gyms">
      <h3>Gyms</h3>
      <SearchBar onChange={setQuery} />
      <div className="row">
        <AddGymCard />
        {GymCards}
      </div>
    </div>
  );
};

const mapStateToProps = ({ gymsState }) => ({
  gyms: gymsState,
});

export default connect(mapStateToProps)(GymsList);
