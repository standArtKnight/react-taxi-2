import { takeLatest, call, put } from "redux-saga/effects";
import { actions } from "./duck";
import { fetchLogin } from "../../core/utils/api";
import * as constants from "./constants";

export function* fetchLoginWorker(action) {
  const { payload } = action;
  try {
    const result = yield call(fetchLogin, payload);
    yield put(actions.logInSuccess(result));
  } catch (error) {
    yield put(actions.logInFailure());
  }
}

export function* loginWatch() {
  yield takeLatest(constants.LOG_IN, fetchLoginWorker);
}
