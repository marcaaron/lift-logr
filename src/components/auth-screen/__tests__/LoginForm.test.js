import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import LoginForm from '../LoginForm';

// This only tests the form inputs themselves and not 
// whether they are submitted or validated in anyway.

describe('Login Form Fields', () => {
  let wrapper,
  props,
  handleChange;

  afterEach(cleanup);

  beforeEach(()=>{
    handleChange = jest.fn();

    props = {
      handleChange,
      values: {
        email: '',
        password: ''
      }
    };

    wrapper = render(
      <LoginForm {...props} />
    );
  });

  test('Login Form Fields Render', () => {
    const { getByLabelText, queryByLabelText } = wrapper;
    expect(getByLabelText('Email:')).toExist;
    expect(getByLabelText('Password:')).toExist;
    expect(queryByLabelText('Username:')).not.toExist;
  });

  test('Email input changes on change', () => {
    const { getByTestId, debug } = wrapper;
    const emailInput = getByTestId('input-email');
    fireEvent.change(emailInput, {target: {
      value: 'bob.ross@gmail.com'
    }});
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('Password input changes on change', () => {
    const { getByTestId, debug } = wrapper;
    const passwordInput = getByTestId('input-password');
    fireEvent.change(passwordInput, {target: {
      value: 'password'
    }});
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

});