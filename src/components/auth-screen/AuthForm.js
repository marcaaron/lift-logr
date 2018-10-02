import React, {forwardRef } from 'react';

const AuthForm = forwardRef((props, ref)=>{
  return(
    <form data-testid="auth-form" ref={ref} onSubmit={props.handleSubmit}>
      <div>
        {props.children}
      </div>
      <button data-testid="submit-button" className="auth-submit" type="submit">Submit</button>
    </form>
  );
});    

export default AuthForm;