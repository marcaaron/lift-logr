import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ChevronRightIcon } from '../icons';
import { withRouter } from 'react-router-dom';

const ADD_LOG_ENTRY = gql`
  mutation addLogEntry($exerciseName: String, $movement_id: String) {
    addLogEntry(exerciseName: $exerciseName, movement_id: $movement_id) @client
  }
`;

const MovementButton = ({movement_id, exerciseName, history}) => (
  <Mutation mutation={ADD_LOG_ENTRY}>
    {(addLogEntry, {data}) => (
      <button onClick={e=> {
        e.preventDefault();
        addLogEntry({variables: {exerciseName, movement_id}}).then(()=>{
          history.push('/');
        });
      }} className="large-button">
        {exerciseName}
        <ChevronRightIcon width="20" height="20" color="#FFF"/>
      </button>
    )}
  </Mutation>
);

export default withRouter(MovementButton);
