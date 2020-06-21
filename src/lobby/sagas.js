import { take, put, call, fork, cancel, takeEvery } from "redux-saga/effects";
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

export function sendServerLobbyRequest(socket, action) {
  console.log("Send server lobby req", action);
  socket.emit("lobby.create", action.payload);
}

export function* lobbyListenerSaga() {
  //yield take(CREATE_LOBBY.REQUEST);
  const socket = yield call(connect);
  const socketChannel = yield call(subscribe, socket);
  yield takeEvery(CREATE_LOBBY.REQUEST, sendServerLobbyRequest, socket);
  while (true) {
    const payload = yield take(socketChannel);
    yield put(payload);
  }
}
