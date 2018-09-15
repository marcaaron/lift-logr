import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Loading from './components/Loading';

const GET_USER = gql`
  query getUser {
    user {
      username
    }
  }
`;

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      <Query query={GET_USER}>
        {({data, loading, error})=>{
          if(loading) return <Loading/>;
          if(error){
            return <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />;
          }
          if(data && data.user){
            return <Component {...props} />;
          }
        }}
      </Query>
    }
  />
);

export default AuthRoute;
