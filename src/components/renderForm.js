import React, { Fragment } from 'react';

export default function renderForm(){
  const { handleChange } = this;
  switch(this.state.authType){
    case 'REGISTER':
    return(
      <Fragment>
        <label htmlFor="email">
          <p>Email:</p>
          <input value={this.state.email} onChange={handleChange} id="email" type="text"/>
        </label>
        <label htmlFor="username">
          <p>Username:</p>
          <input value={this.state.username} onChange={handleChange} id="username" type="text"/>
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input value={this.state.password} onChange={handleChange} id="password" type="password"/>
        </label>
        <button className="auth-submit" type="submit">Submit</button>
      </Fragment>
    );
    case 'LOGIN':
    return(
      <Fragment>
        <label htmlFor="email">
          <p>Email:</p>
          <input value={this.state.email} onChange={handleChange} id="email" type="text"/>
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input value={this.state.password} onChange={handleChange} id="password" type="password"/>
        </label>
        <button className="auth-submit" type="submit">Submit</button>
      </Fragment>
    );
    default:
    return null;
  }
}
