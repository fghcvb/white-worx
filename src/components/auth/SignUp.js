
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import { SignUpForm } from './SignUpForm';
import { signUp } from '../../store/actions/authActions';

//SignUp
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(user) {
    this.setState({ submitted: true });
    this.props.signUp(user);
    this.props.history.push("/signin");
  }

  //SignUp Form
  render() {
    return (
       <div className="col-md-12 text-center">
        <h5 className="text-center signUp">SignUp</h5>
        <SignUpForm onSubmit={this.handleSubmit} {...this.props} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}


export default compose(
  connect('', mapDispatchToProps)
)(SignUp)

