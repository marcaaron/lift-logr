import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { GET_MOVEMENTS } from '../queries';

const CREATE_MOVEMENT = gql`
  mutation createMovement($name: String!){
    createMovement(name:$name){
      id
      name
    }
  }
`;

class MovementCreate extends Component {
  state = {
    name: ''
  }
  render(){
    const { name } = this.state;
    return(
      <Mutation
        mutation={CREATE_MOVEMENT}>
        {(createMovement) => (
          <form onSubmit={(e)=> {
            e.preventDefault();
            createMovement({
              variables: {name},
              refetchQueries: [{query: GET_MOVEMENTS}]
            })
            .then(data=>{
              console.log(data);
              this.props.history.push('/movements/all');
            })
            .catch(err=>console.log(err))
          }}>
            <label htmlFor="name">
              <p>Movement Name</p>
              <input
                type="text"
                id="name"
                onChange={(e)=>
                  this.setState({
                    name:e.currentTarget.value
                  })
                }
                value={name}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default MovementCreate;
