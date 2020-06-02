import React from "react";
import { connect } from "react-redux";
import LobbyContainer from "./lobby/containers/LobbyContainer";
import { createLobbySuccess } from "./lobby/actions/lobby";

class App extends React.Component {
  constructor({ dispatch }) {
    super();
    dispatch(
      createLobbySuccess({
        map: "haven",
        owner: "1",
        id: 0,
      })
    );
  }

  render() {
    return (
      <div>
        <p>Work in progress!</p>
        <LobbyContainer lobbyId={0} />
      </div>
    );
  }
}

export default connect()(App);
