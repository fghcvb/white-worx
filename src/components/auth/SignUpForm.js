import React from 'react';
import { Link } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';
import { validate } from '../../helpers/validate';
import { RenderField } from '../../helpers/RenderField';

//SignUpForm
const SignUpForm = (props) => {
  const { handleSubmit, logIn, error } = props;
  return (
    <Form onSubmit={handleSubmit} className="form form-horizontal" role="form">
      <Field
        name="name" type="text" label="Name" className="form-control"
        component={RenderField}
      />
      <Field
        name="email" type="text" label="Email Address" className="form-control"
        component={RenderField}
      />
      <Field
        name="password" type="password" label="Password" className="form-control"
        component={RenderField}
      />
      {logIn}
      {error && <strong>{error}</strong>}
      <div className="form-group marginTop">
        <button type="submit" className="btn btn-primary signUpBtn"  >SignUp</button>
        <Link to="/signin" className="btn btn-link login">Login</Link>
      </div>
    </Form>
  );
};

const ReduxRegisterForm = reduxForm({
  form: 'register',
  validate
})(SignUpForm);

export { ReduxRegisterForm as SignUpForm };