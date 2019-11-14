import { combineReducers } from "redux";

const isLogin = (state, action) => {
  return {
    isAuth: true
  };
};

const appReduser = combineReducers({ isLogin });

export default appReduser;
