import { connect } from "react-redux";

import Login from "../components/Login";

import { loginRequest } from "../actions";

const mapDispatchToProps = {
  loginRequest,
};

const LoginPage = connect(null, mapDispatchToProps)(Login);

export default LoginPage;
