import React from 'react';

const AuthButtons = ({authType, toggleAuthType}) => (
  <div
    className={`auth-buttons ${
      authType === 'REGISTER' ? 
        'auth-buttons--left' : ''
    } ${
      authType === 'LOGIN' ? 'auth-buttons--right' : ''
    }
    `}>
    <button
      id="REGISTER"
      onClick={toggleAuthType}
      className={'auth-button'}
      data-testid="button-register">
      Register
    </button>
    <button
      id="LOGIN"
      onClick={toggleAuthType}
      className={`auth-button`}
      data-testid="button-login">
      Log In
    </button>
  </div>
);

export default AuthButtons;