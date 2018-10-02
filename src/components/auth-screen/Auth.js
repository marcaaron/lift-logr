import React, { Component, createRef } from 'react';
import renderForm from './renderForm';
import './Auth.css';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
import AuthForm from './AuthForm';
import AuthButtons from './AuthButtons';

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
      return null;
    }
  }

  render(){
    const { authType } = this.state;
    const { toggleAuthType, renderForm, form, handleSubmit } = this;
    return(
      <div className="auth-main">
        <div className="logo">
          <h1>LOGR</h1>
          <p>lift <span>•</span> log <span>•</span> repeat</p>
        </div>
        <AuthButtons authType={authType} toggleAuthType={toggleAuthType} />
        <AuthForm ref={form} handleSubmit={handleSubmit}>
            {renderForm()}
        </AuthForm>
      </div>
    )
  }
}

export default compose(
  graphql(SIGNUP_USER, {name:'signupUser'}),
  graphql(LOGIN_USER, {name:'loginUser'})
)(Auth);
