import React from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { MAPS } from "../constants/lobby";

class CreateLobby extends React.Component {
  constructor() {
    super();
    this.state = {
      activeMap: null,
    };
  }

  render = () => (
    <div>
      <Container>
        <Row>
          <ButtonGroup>
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
        </Row>
      </Container>
    </div>
  );
}

export default CreateLobby;
