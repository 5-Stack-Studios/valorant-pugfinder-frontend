import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LobbyPage from "./LobbyPage";

const App = () => (
  <Router>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Valorant Pugfinder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route path="/">
        <LobbyPage />
      </Route>
    </Switch>
  </Router>
);

export default App;