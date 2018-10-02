import React, { Fragment } from 'react';

const LoginForm = ({handleChange, values}) => (
  <Fragment>
    <label htmlFor="email">
      <p>Email:</p>
      <input required data-testid="email-input" value={values.email} onChange={handleChange} id="email" type="text"/>
    </label>
    <label htmlFor="password">
      <p>Password:</p>
      <input required data-testid="password-input" value={values.password} onChange={handleChange} id="password" type="password"/>
    </label>
  </Fragment>
);

export default LoginForm;