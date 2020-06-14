import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LobbyCard from "./LobbyCard";
import RoleQueues from "./RoleQueues";

/**
 * A component representing a single lobby in the UI.
 * @param {*} param0
 */
const Lobby = (lobby) => (
  <div>
    <Container fluid>
      <Row>
        <Col md="auto">
          {" "}
          <LobbyCard {...lobby} />
        </Col>
        <Col>
          <RoleQueues />
        </Col>
      </Row>
    </Container>
    {/* Add Chat component */}
  </div>
);

export default Lobby;
