import React, { Component } from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import { SignInForm } from './SignInForm';
import { signIn } from '../../store/actions/authActions';
import PropTypes from "prop-types";

// SignIn
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //After Login redirect to Home page
  componentDidMount() {
    if (this.props.auth.isAuthenticated==true) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }
  
  handleSubmit(values) {
    const { email, password } = values;
    if (email && password) {
      this.props.signIn(values)
    }

  }

  //Login Form
  render() {
    return (
         <div className="col-md-12 text-center">
      <h5 className="text-center signUp">Login</h5>
      <SignInForm onSubmit={this.handleSubmit} {...this.props} />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
        auth: state.auth
      }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn)