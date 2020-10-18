import { SET_CLASSES } from "./actionTypes";
// import instance from "./instance";
import { classes } from "./data";

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
