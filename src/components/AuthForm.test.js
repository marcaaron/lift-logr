import React from 'react';
import AuthForm from './AuthForm';
import { render, cleanup, fireEvent } from 'react-testing-library';

describe('Login / Register Form', () => {
  let wrapper,
  handleSubmit;
  
  afterEach(cleanup);

  beforeEach(()=>{
    handleSubmit = jest.fn();
    wrapper = render(
      <AuthForm handleSubmit={handleSubmit}/>
    );
  });

  test('it renders a form element', () => {
    const { getByTestId, debug } = wrapper;
    expect(getByTestId('auth-form').toExist);
  });

  test('clicking on submit button calls handleSubmit', () => {
    const { getByTestId } = wrapper;
    fireEvent.click(getByTestId('submit-button'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

});