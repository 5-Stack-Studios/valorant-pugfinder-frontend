import { connect } from "react-redux";
import LobbySettingsPanel from "../components/LobbySettingsPanel";
import { createLobbyRequest } from "../actions/lobby";

const mapDispatchToProps = {
  createLobbyRequest,
};

const CreateLobbyPanel = connect(null, mapDispatchToProps)(LobbySettingsPanel);

export default CreateLobbyPanel;
