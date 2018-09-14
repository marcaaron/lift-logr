import React, { Component, createRef } from 'react';
import renderForm from './renderForm';
import './Auth.css';

class Auth extends Component {
  constructor(props){
    super(props);
    this.form = createRef();
    this.state = {
      authType: '',
      formData: {
        email:'',
        password:'',
        username: ''
      }
    };
    this.renderForm = renderForm.bind(this);
  }

  toggleAuthType = ({currentTarget}) => {
    if(this.state.authType === currentTarget.id){
      this.form.current.style.maxHeight = '1px';
      setTimeout(()=>{
        this.setState({authType: ''})
      }, 700);
    }else{
      this.setState({authType: currentTarget.id},()=>{
        this.form.current.style.maxHeight = `100%`;
      });
    }
  }

  handleChange = ({currentTarget}) => {
    const value = currentTarget.value;
    const key = currentTarget.id;
    const formData = {...this.state.formData};
    formData[key] = value;
    this.setState({formData});
  }

  handleSubmit = (e) => {
    const {email, username, password } = this.state.formData;
    e.preventDefault();
    switch(this.state.authType){
      case 'REGISTER':
      console.log('REGISTER', email, username, password);
      break;
      case 'LOGIN':
      console.log('LOGIN', email, password);
      break;
      default:
      console.log('wtf');
    }
  }

  render(){
    return(
      <div className="auth-main">
        <div className="logo">
          <h1>LOGR</h1>
          <p>lift <span>•</span> log <span>•</span> repeat</p>
        </div>
        <div className="auth-buttons">
          <button
            id="REGISTER"
            onClick={this.toggleAuthType}
            className="auth-button"
            >
            Register
          </button>
          <button
            id="LOGIN"
            onClick={this.toggleAuthType}
            className="auth-button"
            >Log In</button>
        </div>
        <form ref={this.form} onSubmit={this.handleSubmit}>
          {this.renderForm()}
        </form>
      </div>
    )
  }
}

export default Auth;
