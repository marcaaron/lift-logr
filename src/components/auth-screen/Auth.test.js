import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import Auth from './Auth';

describe('Login / Register Screen', ()=>{
  let wrapper;

  afterEach(cleanup);

  beforeEach(()=>{
    wrapper = render(
      <MockedProvider>
        <Auth />
      </MockedProvider>
    )
  });

  test('it displays buttons to toggle between register and login', ()=>{
    const { getByTestId, debug } = wrapper;
    expect(getByTestId('login-button')).toExist;
    expect(getByTestId('register-button')).toExist;
  });

  test('clicking on register opens the registration form', ()=>{
    const { getByTestId, getByLabelText, debug } = wrapper;
    const registerButton = getByTestId('register-button');
    fireEvent.click(registerButton);
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const usernameInput = getByLabelText('Username:');
    expect(emailInput).toExist;
    expect(passwordInput).toExist;
    expect(usernameInput).toExist;
  });

  test('clicking on login opens the login form', ()=>{
    const { getByTestId, getByLabelText, debug } = wrapper;
    const registerButton = getByTestId('register-button');
    fireEvent.click(registerButton);
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const usernameInput = getByLabelText('Username:');
    expect(emailInput).toExist;
    expect(passwordInput).toExist;
    expect(usernameInput).toBeFalsy;
  });

  test('it displays a submit button', () => {
    const { getByTestId } = wrapper;
    expect(getByTestId('submit-button')).toExist;
  });

  test('clicking on submit will call handleSubmit', ()=> {
    const { getByTestId, debug } = wrapper;
    const submitButton = getByTestId('submit-button');
    fireEvent.click(submitButton);
    // debug();
  });

});