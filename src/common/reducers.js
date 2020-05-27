import { combineReducers } from "redux";

import accounts from "../accounts/reducers";
import lobby from "../lobby/reducers/main";

export const appReducer = combineReducers({
  accounts,
  lobby,
});
