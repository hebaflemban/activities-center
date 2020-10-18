import { SET_CLASSES } from "./actionTypes";
import axios from "axios";
import { classes } from "./data";

const instance = axios.create({
  baseURL: "",
});

export const fetchClasses = () => async (dispatch) => {
  try {
    // const res = await instance.get("/classes");
    // const classes = res.data;
    dispatch({
      type: SET_CLASSES,
      payload: classes,
    });
  } catch (err) {
    console.error(err);
  }
};
