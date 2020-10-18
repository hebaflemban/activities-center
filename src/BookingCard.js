import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { cancelBooking } from "./redux/actions";

const BookingCard = ({ booking }) => {
  console.log("I'm in ClassCard", booking);
  return (
    <div className="col-lg-4 col-md-6 col-12">
      {/* <Link to={`/bookings/${booking.id}`} className="card"> */}
      <div className="image">
        <img
          className="card-img-top img-fluid"
          src="#"
          alt={booking.class.title}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <span>{booking.class.title}</span>
        </h5>
        <p>
          <span>{booking.class.date}</span>
        </p>
        {/* <small className="card-text">{booking.classes.length} classes</small> */}
      </div>
      {/* </Link> */}
      <Button variant="danger" onClick={cancelBooking(booking.id)}>
        Cancel
      </Button>
    </div>
  );
};
export default BookingCard;
