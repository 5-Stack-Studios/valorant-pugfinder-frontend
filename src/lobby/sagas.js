import { take, put, call, select, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { createLobbySuccess } from "./actions/lobby";
import { CREATE_LOBBY } from "./constants/lobby";
import { connect } from "../common/server";

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    console.log("Action:", action);
    yield put(action);
  }
}

export function subscribe(socket) {
  return new eventChannel((emit) => {
    const receiveLobby = ({ payload }) => emit(createLobbySuccess(payload));
    socket.on("lobby.create.success", receiveLobby);
    return () => {};
  });
}

export function* sendServerLobbyRequest(socket, action) {
  const owner = yield select((state) => state.accounts.activeUser && state.accounts.activeUser.id);
  socket.emit("lobby.create", { ...action.payload, owner });
}

export function* lobbyListenerSaga() {
  const socket = yield call(connect);
  const socketChannel = yield call(subscribe, socket);
  yield takeEvery(CREATE_LOBBY.REQUEST, sendServerLobbyRequest, socket);
  while (true) {
    const payload = yield take(socketChannel);
    yield put(payload);
  }
}
