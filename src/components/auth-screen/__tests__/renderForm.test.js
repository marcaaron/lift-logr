import React from 'react';
import { render, cleanup, queryAllByTestId } from 'react-testing-library';
import renderForm from '../renderForm';

describe('renderForm function', () => {
  const formData = {
    email: '',
    username: '',
    password: ''
  };

  afterEach(cleanup);
  
  test('When authType is an empty string no inputs render', () => {
    const mockParent = {
      handleChange: jest.fn(),
      state: {
        authType: '',
        formData: formData
      }
    };
    
    const { debug, queryAllByTestId } = render(renderForm.call(mockParent));
    const inputs = queryAllByTestId(/input-.+/i);
    expect(inputs).toHaveLength(0);  
  });

  test('When authType is REGISTER 3 inputs render', () => {
    const mockParent = {
      handleChange: jest.fn(),
      state: {
        authType: 'REGISTER',
        formData: formData
      }
    };
    
    const { debug, queryAllByTestId } = render(renderForm.call(mockParent));
    const inputs = queryAllByTestId(/input-.+/i);
    expect(inputs).toHaveLength(3);  
  });

  test('When authType is LOGIN 2 inputs render', () => {
    const mockParent = {
      handleChange: jest.fn(),
      state: {
        authType: 'LOGIN',
        formData: formData
      }
    };
    
    const { debug, queryAllByTestId } = render(renderForm.call(mockParent));
    const inputs = queryAllByTestId(/input-.+/i);
    expect(inputs).toHaveLength(2);  
  });

});