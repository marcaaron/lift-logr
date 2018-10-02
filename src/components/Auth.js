import React, { Component, createRef } from 'react';
import renderForm from './renderForm';
import './Auth.css';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
import AuthForm from './AuthForm';

const SIGNUP_USER = gql`
  mutation signup($email: String!, $password: String!, $username: String!){
    signup(
      email: $email,
      password: $password,
      username: $username
    ){
      user{
        email
        username
      }
      token
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!){
    login(
      email:$email,
      password:$password
    ){
      user{
        email
        username
      }
      token
    }
  }
`;

class Auth extends Component {
  constructor(props){
    super(props);
    this.form = createRef();
    this.loginBtn = createRef();
    this.registerBtn = createRef();

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
        this.form.current.style.maxHeight = `360px`;
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
        this.props.signupUser({
          variables: { email, username, password }
        })
        .then(({data})=>{
          const { signup: { token } } = data;
          localStorage.setItem('token', token);
          this.props.history.push('/log');
        })
        .catch(err=>console.log(err));
      break;
      case 'LOGIN':
        this.props.loginUser({
          variables: { email, password }
        })
        .then(({data})=>{
          const { login: { token } } = data;
          localStorage.setItem('token', token);
          this.props.history.push('/log');
        })
        .catch(err=>console.log(err));
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
        <div
          className={`auth-buttons ${
          this.state.authType === 'REGISTER' ? 'auth-buttons--left' : ''
          } ${
          this.state.authType === 'LOGIN' ? 'auth-buttons--right' : ''
          }
         `}>
          <button
            id="REGISTER"
            onClick={this.toggleAuthType}
            className={`auth-button`}
            data-testid="register-button"
            >
            Register
          </button>
          <button
            id="LOGIN"
            onClick={this.toggleAuthType}
            className={`auth-button`}
            data-testid="login-button"
            >Log In</button>
        </div>
        <AuthForm ref={this.form} onSubmit={this.handleSubmit}>
            {this.renderForm()}
        </AuthForm>
      </div>
    )
  }
}

export default compose(
  graphql(SIGNUP_USER, {name:'signupUser'}),
  graphql(LOGIN_USER, {name:'loginUser'})
)(Auth);
