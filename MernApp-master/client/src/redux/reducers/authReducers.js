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
} from "../actions/authType";

const initState = {
  token: localStorage.getItem("token"),
  isAuth: Boolean(localStorage.getItem("isAuth")),
  user: JSON.parse(localStorage.getItem("user")),
  errors: null,
  isLoading: false,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.accessToken);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.accessToken,
        errors: null,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: null,
        errors: payload,
      };

    case GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PROFILE_SUCCESS:
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        user: payload,
        isLoading: false,
      };

    case GET_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: null,
        errors: payload,
      };

    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.accessToken);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        errors: null,
        token: payload.accessToken,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        errors: payload,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;
