import { connect } from "react-redux";
import LobbySettingsPanel from "../components/LobbySettingsPanel";
import { createLobbySuccess } from "../actions/lobby";

const mapDispatchToProps = {
  createLobbySuccess,
};

const CreateLobbyPanel = connect(null, mapDispatchToProps)(LobbySettingsPanel);

export default CreateLobbyPanel;
