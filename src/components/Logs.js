import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loading from './Loading';

const GET_USER_LOGS = gql`
  query getUserLogs($limit:Int!, $offset:Int!) {
      getUserLogs(limit: $limit, offset:$offset){
        id
        created_at
      }
    }
`;

const Logs = () => (
  <Query
    query={GET_USER_LOGS}
    variables={{limit:10, offset:0}}
  >
    {({ data, loading, error, fetchMore })=>{
      if(loading) return <Loading/>;
      if(error) return 'Error';
      console.log(data);
      return(
        <div>
          {data.getUserLogs.map(log=>(
            <div key={log.id}>{new Date(log.created_at).toLocaleString()}</div>
          ))}
          <button onClick={()=>{
            fetchMore({
              variables: {
                offset: data.getUserLogs.length
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if(!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                  getUserLogs: [...prev.getUserLogs, ...fetchMoreResult.getUserLogs]
                });
              }
            })
          }
          }>Load More</button>
        </div>
      )
    }}
  </Query>
)

export default Logs;
