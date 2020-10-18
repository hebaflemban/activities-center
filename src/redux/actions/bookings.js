import { SET_BOOKINGS, BOOK, CANCEL } from "./actionTypes";
import instance from "./instance";
import { bookings } from "./data";

export const fetchBookings = () => async (dispatch) => {
  try {
    // const res = await instance.get("/bookings");
    //are we doing classes/bookings or user/bookings or gym/bookings or ALL bookings then we filter
    // const bookings = res.data;
    console.log(bookings);
    dispatch({
      type: SET_BOOKINGS,
      payload: bookings,
    });
  } catch (err) {
    console.error(err);
  }
};

export const bookClass = (classID) => async (dispatch) => {
  try {
    console.log("trying to book a class");
    const res = await instance.post("/book", classID);
    const newBooking = res.data;
    dispatch({
      type: BOOK,
      payload: newBooking,
    });
  } catch (err) {
    console.error(err);
  }
};

export const cancelBooking = (bookingID) => async (dispatch) => {
  try {
    console.log("trying to cancel a class");
    const res = await instance.delete("/cancel", bookingID);
    const deletedBooking = res.data;
    dispatch({
      type: CANCEL,
    });
  } catch (err) {
    console.error(err);
  }
};
