import React from 'react';
import { render, cleanup } from 'react-testing-library';
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
    const { getByTestId } = wrapper;
    expect(getByTestId('login-button').toExist);
    expect(getByTestId('register-button').toExist);
  });

  test('it displays a submit button', ()=>{
    const { getByTestId } = wrapper;
    expect(getByTestId('submit-button'));
  });

});