import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

export default function renderForm(){
  const { handleChange } = this;
  const { formData } = this.state;
  switch(this.state.authType){
  case 'REGISTER':
    return(
      <RegisterForm 
        handleChange={handleChange}
        values={formData}
      />
    );
  case 'LOGIN':
    return(
      <LoginForm 
        handleChange={handleChange}
        values={formData}
      />
    );
  default:
    return null;
  }
}