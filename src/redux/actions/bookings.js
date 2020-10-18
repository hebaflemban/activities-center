import { SET_BOOKINGS } from "./actionTypes";
import instance from "./instance";

export const fetchBookings = () => async (dispatch) => {
  try {
    const res = await instance.get("/bookings");
    //are we doing classes/bookings or user/bookings or gym/bookings or ALL bookings then we filter
    const bookings = res.data;
    dispatch({
      type: SET_BOOKINGS,
      payload: bookings,
    });
  } catch (err) {
    console.error(err);
  }
};
