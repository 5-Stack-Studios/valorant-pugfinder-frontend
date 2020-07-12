import { combineReducers } from "redux";
import jwtDecode from "jwt-decode";
import { SIGNUP, LOGIN } from "./constants";

const activeUser = (state = null, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
    case SIGNUP.SUCCESS:
      // TODO: Improve validation
      const { user } = jwtDecode(action.payload.token)
      console.log(user);
      return user;
    default:
      return state;
  }
};

const accounts = combineReducers({
  activeUser,
});

export default accounts;