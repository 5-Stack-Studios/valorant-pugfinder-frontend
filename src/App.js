import React from "react";
import { connect } from "react-redux";
import CreateLobbyPanel from "./lobby/containers/CreateLobbyPanel";
import LobbyContainer from "./lobby/containers/LobbyContainer";

class App extends React.Component {
  render() {
    const { lobbies } = this.props;
    console.log("Rerender", lobbies);
    return (
      <div>
        <p>Work in progress!</p>
        {lobbies.map((lobby) => (
          <LobbyContainer lobby={lobby} />
        ))}
        <CreateLobbyPanel />
      </div>
    );
  }
}

const mapStateToProps = ({ lobby }) => {
  console.log({
    lobbies: lobby.lobbies,
  });
  return {
    lobbies: lobby.lobbies,
  };
};

export default connect(mapStateToProps)(App);
