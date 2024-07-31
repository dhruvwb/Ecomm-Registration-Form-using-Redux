import { combineReducers } from "redux";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./action";

const initialState = {
  user: null,
  loading: false,
  accessToken: null,
  error: null,
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        accessToken: action.accessToken,
        loading: true,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      const error = {
        message: action.error.message,
        code: action.error.code,
      };
      return { ...state, error, loading: false, isLoggedIn: false };
    case "LOGOUT":
      return { ...state, user: null, accessToken: null, isLoggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
