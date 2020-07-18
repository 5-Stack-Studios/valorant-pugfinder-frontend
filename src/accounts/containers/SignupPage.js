import { connect } from "react-redux";

import Signup from "../components/Signup";

import { signupRequest } from "../actions";

const mapDispatchToProps = {
  signupRequest,
};

const SignupPage = connect(null, mapDispatchToProps)(Signup);

export default SignupPage;
