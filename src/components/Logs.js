import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loading from './Loading';

const GET_USER_LOGS = gql`
  query getUserLogs($first:Int!, $skip:Int!) {
      getUserLogs(first: $first, skip:$skip){
        created_at
      }
    }
`;

const Logs = () => (
  <Query
    query={GET_USER_LOGS}
    variables={{first:10, skip:0}}
  >
    {({data, loading, error})=>{
      if(loading) return <Loading/>;
      if(error) return 'Error';
      console.log(data);
      return(
        <div>
          {/* {data.getUserLogs.map(log=>(
            <div key={log.id}>{new Date(log.created_at).toLocaleString()}</div>
          ))} */}
        </div>
      )
    }}
  </Query>
)

export default Logs;
