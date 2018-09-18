import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loading from './Loading';

const GET_PAST_LOG = gql`
  query getPastLog($id:String!){
    getPastLog(id:$id){
      sets{
        id
        reps
        weight
        unit
        movement {
          name
        }
      }
    }
  }
`

const PastLog = (props) => {
  const { id } = props.match.params;
  return(
    <Query
      query={GET_PAST_LOG}
      variables={{id}}
    >
      {({data, loading, error})=>{
        if(loading) return <Loading/>;
        if(error) return 'Error';
        const { sets } = data.getPastLog;
        return sets.map((set) =>
          <div key={set.id}>{set.movement.name} {set.reps} x {set.weight} {set.unit}</div>
        )
      }}
    </Query>
  )
}
export default PastLog;
