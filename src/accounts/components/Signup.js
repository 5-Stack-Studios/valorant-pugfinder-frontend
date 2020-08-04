import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Signup extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
  };

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  signupSubmit = () => {
    const { email, password, username } = this.state;
    this.props.signupRequest(username, email, password);
  };

  render() {
    return (
      <Container>
        <Form>
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              onChange={this.changeHandler}
              type="text"
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              onChange={this.changeHandler}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={this.changeHandler}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form>
        <Button onClick={this.signupSubmit} variant="primary" type="submit">
          Sign up
        </Button>
      </Container>
    );
  }
}

export default Signup;
