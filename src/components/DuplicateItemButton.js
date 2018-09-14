import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { CopyIcon } from '../icons';

const DUPLICATE_LOG_ENTRY = gql`
  mutation duplicateLogEntry($id: String) {
    duplicateLogEntry(id: $id) @client
  }
`;

const DuplicateItemButton = ({id}) => (
  <Mutation mutation={DUPLICATE_LOG_ENTRY}>
    {(duplicateLogEntry, {data})=>(
      <div onClick={ e => {
        e.preventDefault();
        duplicateLogEntry({
          variables: { id }
        })
      }}>
        <CopyIcon width={30} height={30} color="#FFF"/>
      </div>
    )}
  </Mutation>
);

export default DuplicateItemButton;
