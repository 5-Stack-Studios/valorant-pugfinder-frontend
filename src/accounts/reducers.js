import { combineReducers } from "redux";
import { SIGNUP, LOGIN } from "./actions";

const accounts = combineReducers({
  activeUser,
})

const activeUser = (state = null, action) => {
  switch (action.type) {
    
  } 
}

export default accounts;