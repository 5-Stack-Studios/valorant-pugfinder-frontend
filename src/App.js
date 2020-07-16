import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LobbyPage from "./lobby/components/LobbyPage";
import LoginPage from "./accounts/containers/LoginPage";
import SignupPage from "./accounts/containers/SignupPage";

import "./App.css";

const App = ({ activeUser }) => (
  <Router>
    <div className="under-construction">🚧 Development Build 🚧</div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Valorant Pugfinder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav className="ml-auto justify-content-end">
          <Nav.Link>
            {activeUser && "Logged in as: " + activeUser.name}
          </Nav.Link>
          {!activeUser && <Nav.Link href="/signup">Signup</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/">
        <LobbyPage />
      </Route>
    </Switch>
  </Router>
);

const mapStateToProps = (state) => {
  const { accounts } = state;

  return {
    activeUser: accounts.activeUser,
  };
};

export default connect(mapStateToProps)(App);
