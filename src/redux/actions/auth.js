import { AUTHENTICATE, LOGOUT } from "./actionTypes";
import instance from "./instance";
import decode from "jwt-decode";
import Cookies from "js-cookie";

export const authenticate = (user, arg) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(`${arg}`, user);
      const { token } = res.data;
      instance.defaults.headers.Authorization = `jwt ${token}`;
      Cookies.set("token", token);
      dispatch({
        type: AUTHENTICATE,
        payload: decode(token),
      });
    } catch (error) {
      console.log("Couldn't login");
    }
  };
};

export const isTokenValid = () => {
  console.log(!!Cookies.get("token"));

  return (dispatch) => {
    const token = Cookies.get("token");
    if (token) {
      const user = decode(token);
      console.log(token, user);
      if (user.exp >= Date.now() / 1000) {
        instance.defaults.headers.Authorization = `Bearer ${token}`;
        dispatch({
          type: AUTHENTICATE,
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
  Cookies.remove("token");
  return {
    type: LOGOUT,
    payload: null,
  };
};
