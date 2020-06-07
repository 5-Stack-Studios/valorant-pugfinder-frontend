import React from "react";
import { connect } from "react-redux";
import CreateLobbyPanel from "./lobby/containers/CreateLobbyPanel";
import LobbyContainer from "./lobby/containers/LobbyContainer";
import { createLobbySuccess } from "./lobby/actions/lobby";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      createLobbySuccess({
        map: "split",
        owner: "1",
        id: 0,
      })
    );
    console.log("Dispatched");
  }

  render() {
    const { lobbies } = this.props;
    console.log("Rerender", lobbies);
    return (
      <div>
        <p>Work in progress!</p>
        {lobbies.map(({ id }) => (
          <LobbyContainer lobbyId={id} />
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
