import { connect } from "react-redux";
import Lobby from "../components/Lobby";

import { NUM_TEAM_PLAYERS } from "../constants/match";

const mapStateToProps = (state, ownProps) => {
  const currentLobby = state.lobby.lobbies[ownProps.lobbyId];
  return {
    ...currentLobby,
    owner: state.accounts[currentLobby.owner],
    team1: [
      ...currentLobby.team1,
      // Fill the rest of the array with nulls
      ...new Array(NUM_TEAM_PLAYERS - currentLobby.team1.length).fill(null),
    ],
    team2: [
      ...currentLobby.team2,
      // Fill the rest of the array with nulls
      ...new Array(NUM_TEAM_PLAYERS - currentLobby.team2.length).fill(null),
    ],
  };
};

const LobbyContainer = connect(mapStateToProps)(Lobby);

export default LobbyContainer;
