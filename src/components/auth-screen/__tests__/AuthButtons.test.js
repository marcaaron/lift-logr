import React from 'react';
import AuthButtons from '../AuthButtons';
import { render, cleanup, fireEvent } from 'react-testing-library';

describe('Auth Screen Buttons', () => {

  let toggleAuthType;
  afterEach(cleanup);

  beforeEach(()=>{
    toggleAuthType = jest.fn();
  });

  test('renders Login And Register buttons', () => {
    const { debug, queryAllByTestId } = render(<AuthButtons toggleAuthType={toggleAuthType}/>);
    const buttons = queryAllByTestId(/button-.+/i);
    expect(buttons).toHaveLength(2);
    buttons.forEach(button=>{
      fireEvent.click(button)
    });
    expect(toggleAuthType).toHaveBeenCalledTimes(2);
  });

});