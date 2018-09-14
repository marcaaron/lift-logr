import { gql } from 'apollo-boost';

export const GET_LOG = gql`
  query GetLog {
    currentLog @client {
      items {
        id
        reps
        weight
        unit
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
