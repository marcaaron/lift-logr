import React, { Fragment } from 'react';

const RegisterForm = ({handleChange, values}) => (
  <Fragment>
    <label htmlFor="email">
      <p>Email:</p>
      <input value={values.email} onChange={handleChange} id="email" type="text"/>
    </label>
    <label htmlFor="username">
      <p>Username:</p>
      <input value={values.username} onChange={handleChange} id="username" type="text"/>
    </label>
    <label htmlFor="password">
      <p>Password:</p>
      <input value={values.password} onChange={handleChange} id="password" type="password"/>
    </label>
  </Fragment>
);

export default RegisterForm;