import React from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import { AGENTS, AGENTS_TO_PORTRAITS } from "../constants/players";

import "./RoleQueues.css";

class RoleQueues extends React.Component {
  render() {
    return (
      <Tab.Container defaultActiveKey="breach">
        <Row>
          <Col lg={2}>
            <Nav variant="pills right">
              {AGENTS.map((agent) => (
                <Nav.Item>
                  <Nav.Link eventKey={agent}>
                    <img
                      className="agent-icon"
                      src={AGENTS_TO_PORTRAITS[agent]}
                    />
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col lg={10}>
            <Tab.Content className="queue-content">
              {AGENTS.map((agent) => (
                <Tab.Pane eventKey={agent}><h3>Queue for {agent}</h3></Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default RoleQueues;
