import { combineReducers } from "redux";
import { SIGNUP, LOGIN } from "./constants";

const activeUser = (state = null, action) => {
  switch (action.type) {
    case LOGIN.success:
    case SIGNUP.success:
      return action.payload;
    default:
      return state;
  }
};

const accounts = combineReducers({
  activeUser,
});

export default accounts;
