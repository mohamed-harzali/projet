import { prefixe } from "../../helpers/const";
import {
  GET_PROFILE_FAILED,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./authType";
import axios from "axios";
import { setToken } from "../../helpers/token";

export const login = (info) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  try {
    const res = await axios.post(`${prefixe}/api/user/login`, info);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED,
      payload: err.response.data.msg,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILE_REQUEST,
  });

  try {
    setToken();
    const res = await axios.get(`${prefixe}/api/user/userProfile`);

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PROFILE_FAILED,
      payload: err.response.data.msg,
    });
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const register = (info) => async (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });

  try {
    const res = await axios.post(`${prefixe}/api/user/register`, info);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAILED,
      payload: err.response.data.msg,
    });
  }
};
