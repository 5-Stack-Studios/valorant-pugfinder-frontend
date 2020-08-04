import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as constants from "./constants";
import axios from "axios";

//const mysql = require('mysql');

function apiRequestSignup(authParams) {
  return axios.request({
    method: "post",
    url: "/api/user",
    data: authParams,
  });
}

function apiRequestLogin(authParams) {
  return axios.request({
    method: "post",
    url: "/api/login",
    data: authParams,
  });
}

function* signupSaga(action) {
  try {
    //console.log(action.payload);
    let { data } = yield call(apiRequestSignup, action.payload);
    console.log(data);
    console.log('here')
    yield put(actions.signupSuccess(data.token));
    // browserHistory.push('/'); TODO: decide redirect
  } catch (err) {
    // TODO: Properly format the error
    console.error("Signup error");
    console.error(err)
    yield put(actions.signupFailure(err));
  }
}

export function* signupListenerSaga() {
  yield takeLatest(constants.SIGNUP.REQUEST, signupSaga);

}

function* loginSaga(action) {
  try {
    let { data } = yield call(apiRequestLogin, action.payload);
    
    console.log("Token: ", data.token);

    yield put(actions.loginSuccess(data.token));
  } catch (err) {
    console.error("Login error", err);
    yield put(actions.loginFailure(err));
  }
}

export function* loginListenerSaga() {
  yield takeLatest(constants.LOGIN.REQUEST, loginSaga);
}
