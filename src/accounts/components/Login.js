import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  loginSubmit = () => {
    const { email, password } = this.state;
    this.props.loginRequest(email, password);
  };

  render() {
    return (
      <Container>
        <Form>
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
            <Form.Label controlId="password">Password</Form.Label>
            <Form.Control
              name="password"
              onChange={this.changeHandler}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form>
        <Button onClick={this.loginSubmit} variant="primary" type="submit">
          Login
        </Button>
      </Container>
    );
  }
}

export default Login;
