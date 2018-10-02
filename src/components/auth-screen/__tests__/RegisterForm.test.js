import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import RegisterForm from '../RegisterForm';

// This only tests the form inputs themselves and not 
// whether they are submitted or validated in anyway.

describe('Register Form Fields', () => {
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
        username: '',
        password: ''
      }
    };

    wrapper = render(
      <RegisterForm {...props} />
    );
  });

  test('Register Form Fields Render', () => {
    const { getByLabelText } = wrapper;
    expect(getByLabelText('Email:')).toExist;
    expect(getByLabelText('Password:')).toExist;
    expect(getByLabelText('Username:')).toExist;
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

  test('Username input changes on change', () => {
    const { getByTestId, debug } = wrapper;
    const usernameInput = getByTestId('input-username');
    fireEvent.change(usernameInput, {target: {
      value: 'bobbyrossy'
    }});
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

});