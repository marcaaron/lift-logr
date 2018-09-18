import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loading from './Loading';
import PastLogButton from './PastLogButton';

const GET_USER_LOGS = gql`
  query getUserLogs{
      getUserLogs{
        id
        created_at
      }
    }
`;

const Logs = () => (
  <Query
    query={GET_USER_LOGS}
  >
    {({ data, loading, error })=>{
      if(loading) return <Loading/>;
      if(error) return 'Error';
      return(
        <div>
          {data.getUserLogs.map(log=>(
            <PastLogButton key={log.id} {...log}/>
          ))}
          {/* <button onClick={()=>{
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
          }>Load More</button> */}
        </div>
      )
    }}
  </Query>
)

export default Logs;
