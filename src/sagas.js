import { all } from "redux-saga/effects";

import { lobbyListenerSaga } from "./lobby/sagas";
import { signupListenerSaga, loginListenerSaga } from "./accounts/sagas";

export function* rootSaga() {
  yield all([lobbyListenerSaga(), signupListenerSaga(), loginListenerSaga()]);
}
