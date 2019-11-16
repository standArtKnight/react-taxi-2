import { combineReducers } from "redux";
import { createAction } from "redux-actions";
import * as constants from "./constants";

const isAuth = JSON.parse(localStorage.getItem("isAuth"));

export const actions = {
  checkIsLogin: createAction(constants.CHECK_IS_LOGIN),
  logIn: createAction(constants.LOG_IN),
  logInSuccess: createAction(constants.LOG_IN_SUCCESS),
  logInFailure: createAction(constants.LOG_IN_FAILURE)
};

const initialState = {
  isAuth: false,
  loader: false,
  success: {}
};

const isLogin = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHECK_IS_LOGIN:
      if (isAuth) {
        return { ...state, isAuth: true };
      } else {
        return { ...state, isAuth: false };
      }
    case constants.LOG_IN:
      return { ...state, loader: true };
    case constants.LOG_IN_SUCCESS:
      localStorage.setItem("isAuth", JSON.stringify(true));
      return { ...state, isAuth: true, loader: true };
    case constants.LOG_IN_FAILURE:
      return { ...state, loader: false };
    default:
      return state;
  }
};

const appReduser = combineReducers({ isLogin });

export default appReduser;
