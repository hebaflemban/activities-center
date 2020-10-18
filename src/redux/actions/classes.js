import { SET_CLASSES, ADD_CLASS } from "./actionTypes";
import instance from "./instance";
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

export const addClass = (classData, closeModal) => async (dispatch) => {
  try {
    const res = await instance.post("/create", classData);
    const newClass = res.data;
    closeModal();
    dispatch({
      type: ADD_CLASS,
      payload: newClass,
    });
  } catch (err) {
    console.error(err);
  }
};
