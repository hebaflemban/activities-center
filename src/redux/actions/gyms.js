import { SET_GYMS } from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

export const fetchGyms = () => async (dispatch) => {
  try {
    const res = await instance.get("/gyms");
    //are we doing classes/bookings or user/bookings or gym/bookings or ALL bookings then we filter
    const gyms = res.data;
    dispatch({
      type: SET_GYMS,
      payload: gyms,
    });
  } catch (err) {
    console.error(err);
  }
};
