import { SIGNUP, LOGIN } from "./constants";

import { makeActionFunction } from "../common/actionUtils";

export const signupRequest = makeActionFunction(
  SIGNUP.REQUEST,
  "username",
  "email",
  "password"
);

export const signupSuccess = makeActionFunction(SIGNUP.SUCCESS, "user");

export const signupFailure = makeActionFunction(SIGNUP.FAILURE, "error");

export const loginRequest = makeActionFunction(
  LOGIN.REQUEST,
  "email",
  "password"
);

export const loginSuccess = makeActionFunction(LOGIN.SUCCESS, "token");

export const loginFailure = makeActionFunction(LOGIN.FAILURE, "error");
