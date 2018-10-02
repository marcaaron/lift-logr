import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import Auth from '../Auth';

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
    expect(getByTestId('button-login')).toExist;
    expect(getByTestId('button-register')).toExist;
  });

  test('clicking on register opens the registration form', ()=>{
    const { getByTestId, getByLabelText, debug } = wrapper;
    const registerButton = getByTestId('button-register');
    fireEvent.click(registerButton);
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const usernameInput = getByLabelText('Username:');
    expect(emailInput).toExist;
    expect(passwordInput).toExist;
    expect(usernameInput).toExist;
  });

  test('clicking on login opens the login form', ()=>{
    const { getByTestId, getByLabelText, queryByLabelText, debug } = wrapper;
    const loginButton = getByTestId('button-login');
    fireEvent.click(loginButton);
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const usernameInput = queryByLabelText('Username:');
    expect(emailInput).toExist;
    expect(passwordInput).toExist;
    expect(usernameInput).toBeFalsy;
  });

  test('it displays a submit button', () => {
    const { getByTestId } = wrapper;
    expect(getByTestId('submit-button')).toExist;
  });

});