import React from "react";
import { connect } from "react-redux";
import CreateLobbyPanel from "../containers/CreateLobbyPanel";
import LobbyContainer from "../containers/LobbyContainer";

import "./LobbyPage.css";
import Container from "react-bootstrap/Container";

class LobbyPage extends React.Component {
  render() {
    const { lobbies } = this.props;
     return (
      <Container className="lobby-page">
        <CreateLobbyPanel />
        {lobbies.length > 0 && lobbies
          .map((lobby) => <LobbyContainer lobby={lobby} />)
          .reduce((prev, curr) => [prev, <hr />, curr])}
      </Container>
    );
  }
}

const mapStateToProps = ({ lobby }) => {
  return {
    lobbies: lobby.lobbies,
  };
};

export default connect(mapStateToProps)(LobbyPage);
