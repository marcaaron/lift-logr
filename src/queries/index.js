import { gql } from 'apollo-boost';

export const GET_USER_LOGS = gql`
query getUserLogs($skip:Int!, $first:Int!){
  getUserLogs(skip:$skip, first:$first){
    id
    created_at
  }
}
`;

export const GET_LOG = gql`
  query GetLog {
    currentLog @client {
      items {
        id
        reps
        weight
        unit
        movement_id
        exerciseName
        previous {
          unit
          value
        }
      }
    }
  }
`;

export const GET_PICKER = gql`
  query {
    picker @client {
      set_id
      pickerIsOpen
      options {
        reps
        weight
        unit
      }
      values {
        reps
        weight
        unit
      }
    }
  }
`;

export const GET_MOVEMENTS = gql`
  query movements {
    movements{
      id
      name
    }
  }
`;
