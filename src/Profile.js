import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// Components
import BookingCard from "./BookingCard";
import SearchBar from "./SearchBar";

const BookingsList = ({ bookings, user }) => {
  console.log("I'm in user profile  ", bookings, user);
  const [query, setQuery] = useState("");

  const { userID } = useParams();

  const userBookings = bookings.filter(
    (booking) => booking.user.id === +userID
  );

  //   const filterBookings = () => {
  //     return userBookings.filter((booking) => {
  //       return `${booking.class.title}`
  //         .toLowerCase()
  //         .includes(query.toLowerCase());
  //     });
  //   };
  console.log(userBookings, userID);
  const ClassCards = userBookings.map((booking) => (
    <BookingCard key={booking.id} booking={booking} />
  ));

  return (
    <div className="gyms">
      <h3>Classes</h3>
      <SearchBar onChange={setQuery} />
      <div className="row">{ClassCards}</div>
    </div>
  );
};

const mapStateToProps = ({ bookingsState, userState }) => ({
  bookings: bookingsState,
  user: userState,
});

export default connect(mapStateToProps)(BookingsList);
