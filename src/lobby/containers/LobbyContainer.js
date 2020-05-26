import { connect } from "react-redux";
import Lobby from "../components/Lobby";

const mapStateToProps = (state, ownProps) => ({
  ...state.lobbies[ownProps.lobbyId],
});

const LobbyContainer = connect(mapStateToProps)(Lobby);

export default LobbyContainer;
