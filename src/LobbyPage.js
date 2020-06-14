import React from "react";
import { connect } from "react-redux";
import CreateLobbyPanel from "./lobby/containers/CreateLobbyPanel";
import LobbyContainer from "./lobby/containers/LobbyContainer";

import "./App.css";

class LobbyPage extends React.Component {
  render() {
    const { lobbies } = this.props;
    console.log("Rerender", lobbies);
    return (
      <div>
        <div className="under-construction">🚧 Development Build 🚧</div>
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

export default connect(mapStateToProps)(LobbyPage);
