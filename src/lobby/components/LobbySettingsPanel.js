import React from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { MAPS, MAP_TO_IMAGE } from "../constants/lobby";

import "./LobbySettingsPanel.css";

class LobbySettingsPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      activeMap: null,
    };
  }

  render = () => (
    <div
      className="lobby-settings-panel"
      style={{ backgroundImage: `url(${MAP_TO_IMAGE[this.state.activeMap]}` }}
    >
      <h1>Create a Lobby</h1>
      <ButtonGroup className="lobby-maps">
        {MAPS.map((map) => (
          <Button
            key={map}
            active={this.state.activeMap === map}
            onClick={(e) =>
              this.setState({ activeMap: e.currentTarget.innerHTML })
            }
          >
            {map}
          </Button>
        ))}
      </ButtonGroup>
      <Button
        onClick={() => this.props.createLobbyRequest("1", this.state.activeMap)}
        type="submit"
      >
        Submit
      </Button>
    </div>
  );
}

export default LobbySettingsPanel;
