import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loading from './Loading';
import PastLogButton from './PastLogButton';
import { GET_USER_LOGS } from '../queries';

const Logs = () => (
  <Query
    query={GET_USER_LOGS}
    variables={{first:10, skip:0}}
  >
    {({ data, loading, error, fetchMore })=>{
      if(loading) return <Loading/>;
      if(error) return 'Error';
      console.log(data);
      return(
        <div>
          {data.getUserLogs.map(log=>(
            <PastLogButton key={log.id} {...log}/>
          ))}
          <button onClick={()=>{
            fetchMore({
              variables: {
                skip: data.getUserLogs.length
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
