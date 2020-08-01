import React from 'react';
import { Link } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';
import { RenderField } from '../../helpers/RenderField';

const required = value => (value ? undefined : 'Required');

//SignInForm
const SignInForm = (props) => {
  const { handleSubmit, error } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="text"
        label="Email"
        className="form-control"
        validate={[required]}
        component={RenderField}
      />
      <Field
        name="password"
        type="password"
        label="Password"
        className="form-control"
        validate={[required]}
        component={RenderField}
      />
      {error && <strong>{error}</strong>}
      <div className="form-group marginTop">
        <button type="submit" className="btn btn-primary loginBtn" >Login</button>
        <Link to="/signup" className="btn btn-link login">SignUp</Link>
      </div>
    </Form>
  );
};

const ReduxLoginForm = reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(SignInForm);

export { ReduxLoginForm as SignInForm };

