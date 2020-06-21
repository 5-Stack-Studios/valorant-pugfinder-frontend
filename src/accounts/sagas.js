import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as constants from "./constants";
import axios from "axios";

function apiRequestSignup(authParams) {
  return axios.request({
    method: "post",
    url: "/api/users",
    data: authParams,
  });
}

function* signupSaga(action) {
  try {
    let { data } = yield call(apiRequestSignup, action.payload);

    Object.keys(data.session).forEach((key) => {
      localStorage.setItem(key, data[key]);
    });
    
    yield put(actions.signupSuccess);
    // browserHistory.push('/'); TODO: decide redirect
  } catch (err) {
    // TODO: Properly format the error
    yield put(actions.signupFailure(err));
  }
}

export function* signupListenerSaga() {
  yield takeLatest(constants.SIGNUP.REQUEST, signupSaga);
}
