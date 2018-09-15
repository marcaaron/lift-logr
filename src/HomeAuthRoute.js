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

const HomeAuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      <Query query={GET_USER}>
        {({data, loading, error})=>{
          if(loading) return <Loading/>;
          if(error){
            return <Component {...props} />;
          }
          if(data && data.user){
            return(
              <Redirect
                to={{
                  pathname: "/log",
                  state: { from: props.location }
                }}
              />
            )
          }
        }}
      </Query>
    }
  />
);

export default HomeAuthRoute;
