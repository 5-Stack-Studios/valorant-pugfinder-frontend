import { combineReducers } from "redux";
import { SIGNUP, LOGIN } from "./actions";

const activeUser = (state = null, action) => {
  switch (action.type) {
  }

  return state;
};

const accounts = combineReducers({
  activeUser,
});

export default accounts;
