import { connect } from "react-redux";
import Lobby from "../components/Lobby";

import { NUM_TEAM_PLAYERS } from "../constants/match";

const mapStateToProps = (state, ownProps) => {
  const { lobby } = ownProps;
  return {
    ...lobby,
    owner: state.accounts[lobby.owner],
    team1: [
      ...lobby.team1,
      // Fill the rest of the array with nulls
      ...new Array(NUM_TEAM_PLAYERS - lobby.team1.length).fill(null),
    ],
    team2: [
      ...lobby.team2,
      // Fill the rest of the array with nulls
      ...new Array(NUM_TEAM_PLAYERS - lobby.team2.length).fill(null),
    ],
  };
};

const LobbyContainer = connect(mapStateToProps)(Lobby);

export default LobbyContainer;
