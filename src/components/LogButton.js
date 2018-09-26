import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation, Query } from 'react-apollo';
import { GET_LOG, GET_USER_LOGS } from '../queries';
import Loading from './Loading';
import { CLEAR_LOG_STATE } from '../mutations';
import { withRouter } from 'react-router-dom';

const CREATE_LOG = gql`
  mutation createLog($created_at: String!, $sets: [SetInput]){
    createLog(created_at: $created_at, sets: $sets){
      id
      sets{
        id
        reps
        weight
        unit
        movement{
          name
        }
      }
    }
  }
`;

const LogButton = (props) => (
  <Query
    query={GET_LOG}>
    {({data, loading, error, client })=>{
      if(loading) return <Loading/>;
      if(error) return 'error';
      const logItems = data.currentLog.items.map(({reps, weight, unit, movement_id})=>{
        return { reps, weight, unit, movement_id }
      });
      return(
        <Mutation
          mutation={CREATE_LOG}>
          {(createLog)=>{
            return(
              <Mutation
                mutation={CLEAR_LOG_STATE}>
                {(clearLogState)=>(
                    <div>
                      <button
                        onClick={()=>{
                          const created_at = new Date().toISOString();
                          createLog({
                            variables: {
                              created_at,
                              sets: logItems
                            },
                            refetchQueries: [{
                              query: GET_USER_LOGS,
                              variables: {first:10, skip:0}}
                            ]
                          })
                          .then( data => {
                            console.log(data);
                            // dump client state
                            clearLogState()
                            // push user to logs page
                            .then(()=>{
                              // client.resetStore();
                              props.history.push('/logs')
                            })
                            .catch(err=>console.log(err))
                          })
                          .catch(err=>console.log(err));
                        }}
                        className="btn--large"
                      >
                        SAVE LOG
                      </button>
                    </div>
                  )
                }
              </Mutation>
            )
          }}
        </Mutation>
      )
    }}
  </Query>
);

export default withRouter(LogButton);
