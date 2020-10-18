import { SET_GYMS, ADD_GYM } from "./actionTypes";
import instance from "./instance";
import { gyms } from "./data";

export const fetchGyms = () => async (dispatch) => {
  try {
    // const res = await instance.get("/gyms");
    // //are we doing classes/bookings or user/bookings or gym/bookings or ALL bookings then we filter
    // const gyms = res.data;
    dispatch({
      type: SET_GYMS,
      payload: gyms,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addGym = (gym, closeModal) => async (dispatch) => {
  try {
    const res = await instance.post("/create", gym);
    const newGym = res.data;
    closeModal();
    dispatch({
      type: ADD_GYM,
      payload: newGym,
    });
  } catch (err) {
    console.error(err);
  }
};
