import React from "react";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { AGENTS, AGENTS_TO_PORTRAITS } from "../constants/players";

import "./RoleQueues.css";

class RoleQueues extends React.Component {
  render() {
    const { queue } = this.props;
    return (
      <Tab.Container defaultActiveKey="breach">
        <Row>
          <Col lg={2}>
            <Nav variant="pills right">
              {Object.keys(queue).map((agent) => (
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
                <Tab.Pane eventKey={agent}>
                  <div className="queue-header">
                    <h3 className="queue-header-text">
                      Queue for{" "}
                      <span className="queue-header-agent">{agent}</span>
                    </h3>
                    <Button className="queue-join-button">Join</Button>
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default RoleQueues;
