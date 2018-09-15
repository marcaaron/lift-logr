import React, { Component, Fragment } from 'react';
import { PlusIcon, SearchIcon } from '../icons';
import MovementButton from './MovementButton';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loading from './Loading';

const GET_MOVEMENTS = gql`
  query movements {
    movements{
      id
      name
    }
  }
`;
class MovementsAll extends Component {
  state = {
    input: ''
  }

  filterMovements = (array) => {
    const input = new RegExp(this.state.input, 'i');
    return array.filter(movement=> input.test(movement.name));
  }

  handleChange = ({currentTarget}) => {
    this.setState({input: currentTarget.value});
  }

  render() {
    const { input } = this.state;
    const { handleChange, filterMovements } = this;
    return(
      <Fragment>
        <p className="movements-heading">Filter Movements</p>
        <label className="search-label" htmlFor="search">
          <input value={input} onChange={handleChange} id="search" className="movements-search" type="text"/>
          <SearchIcon name="search-icon" width="25" height="25" color="#FFF"/>
        </label>
        <div className="movement-list">
          <Query
            query={GET_MOVEMENTS}>
            {({data, loading, error})=>{
              if(loading) return <Loading/>;
              if(error) return 'Error';
              const { movements } = data;
              const filteredMovements = filterMovements(movements);
              return filteredMovements.length > 0 ?
              filteredMovements.map(({name, id}) =>
                <MovementButton
                  key={id}
                  exerciseName={name}
                  movement_id={id}
                />) :
              <p className="no-movements-text">No movements found!</p>
            }}
          </Query>
          <button className="large-button">
            Create Movement <PlusIcon width="20" height="20" color="#FFF"/>
          </button>
        </div>
      </Fragment>
    )
  }
}

export default MovementsAll;
