import { SIGNUP, LOGIN } from "./constants";

import { makeActionFunction } from "../common/actionUtils";

export const signupRequest = makeActionFunction(
  SIGNUP.REQUEST,
  "username",
  "email",
  "password"
);

export const signupSuccess = makeActionFunction(
  SIGNUP.SUCCESS,
  "user"
)

export const signupFailure = makeActionFunction(
  SIGNUP.FAILURE,
  "error"
)
