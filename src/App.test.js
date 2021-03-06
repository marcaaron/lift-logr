import React from 'react';
import { render } from 'react-testing-library';
import App from './App';
import { MockedProvider } from 'react-apollo/test-utils';

describe('Home Route', ()=> {
  let wrapper;
  beforeEach(()=>{
    wrapper = render(
      <MockedProvider>
        <App/>
      </MockedProvider>
    )
  });

  test('renders without crashing', () => {
    const { getByTestId } = wrapper;
    expect(getByTestId('App').toExist);
  });
  
});
