import rootReducer from "../reduser";
import rootSage from "../saga";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.navigator.userAgent.includes("Chrome")
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);

sagaMiddleware.run(rootSage);

export default store;
