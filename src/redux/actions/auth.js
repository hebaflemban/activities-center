import { LOGIN, LOGOUT } from "./actionTypes";
import instance from "./instance";
import decode from "jwt-decode";
import Cookies from "js-cookie";

export const login = (user, arg) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/login/", user);
      const { access } = res.data;
      instance.defaults.headers.Authorization = `jwt ${access}`;
      Cookies.set("access", access);
      dispatch({
        type: LOGIN,
        payload: decode(access),
      });
    } catch (error) {
      console.log("Couldn't login");
    }
  };
};

export const isAccessValid = () => {
  console.log(!!Cookies.get("access"));

  return (dispatch) => {
    const access = Cookies.get("access");
    if (access) {
      const user = decode(access);
      console.log(access, user);
      if (user.exp >= Date.now() / 1000) {
        instance.defaults.headers.Authorization = `Bearer ${access}`;
        dispatch({
          type: LOGIN,
          payload: user,
        });
      } else {
        dispatch(logout());
      }
    }
  };
};

export const logout = () => {
  delete instance.defaults.headers.Authorization;
  Cookies.remove("access");
  return {
    type: LOGOUT,
    payload: null,
  };
};
