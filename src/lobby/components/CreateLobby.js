import React from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { MAPS, MAP_TO_IMAGE } from "../constants/lobby";

import "./CreateLobby.css";

class CreateLobby extends React.Component {
  constructor() {
    super();
    this.state = {
      activeMap: null,
    };
  }

  render = () => (
    <div
    className="create-lobby-card"
      style={{ backgroundImage: `url(${MAP_TO_IMAGE[this.state.activeMap]}` }}
    >
      <h1>Create a Lobby</h1>
      <ButtonGroup className="lobby-maps">
        {MAPS.map((map) => (
          <Button
            active={this.state.activeMap === map}
            onClick={(e) =>
              this.setState({ activeMap: e.currentTarget.innerHTML })
            }
          >
            {map}
          </Button>
        ))}
      </ButtonGroup>
      <Button type="submit">Submit</Button>
    </div>
  );
}

export default CreateLobby;
