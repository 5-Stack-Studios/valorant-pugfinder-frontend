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
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm="auto">
            <Nav variant="pills" className="flex-column">
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
          <Col>
            <Tab.Content>
              {AGENTS.map((agent) => (
                <Tab.Pane eventKey={agent}>{agent}</Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default RoleQueues;
