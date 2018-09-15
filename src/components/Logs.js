import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loading from './Loading';

const GET_USER_LOGS = gql`
  query getUser {
      user{
        logs {
          id
          created_at
        }
      }
    }
`;

const Logs = () => (
  <Query
    query={GET_USER_LOGS}
  >
    {({data, loading, error})=>{
      if(loading) return <Loading/>;
      if(error) return 'Error';
      return(
        <div>
          {data.user.logs.map(log=>(
            <div key={log.id}>{new Date(log.created_at).toLocaleString()}</div>
          ))}
        </div>
      )
    }}
  </Query>
)

export default Logs;
