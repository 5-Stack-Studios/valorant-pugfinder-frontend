import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxCookiesMiddleware from "redux-cookies-middleware";
import { getStateFromCookies } from "redux-cookies-middleware";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { appReducer } from "./common/reducers";
import { rootSaga } from "./sagas";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const cookiePaths = {
  "accounts.token": { name: "valorant_pugfinder_token" },
  "accounts.activeUser": { name: "valorant_pugfinder_user" },
};

let initialState = {
  accounts: {
    token: null,
    activeUser: null,
  },
};
initialState = getStateFromCookies(initialState, cookiePaths);

const store = createStore(
  appReducer,
  initialState,
  composeEnhancer(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(reduxCookiesMiddleware(cookiePaths))
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

sagaMiddleware.run(rootSaga);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
