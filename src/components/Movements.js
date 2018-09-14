import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import MovementsAll from './MovementsAll';
import './Movements.css';

const MovementsRecent = () => (
  <div>
    Recent Movements
  </div>
)

const renderSection = (type) => {
  switch(type){
    case 'all':
    return <MovementsAll/>;
    case 'recent':
    return <MovementsRecent/>;
    default:
    return null;
  }
}

const Movements = (props) => {
  const { type } = props.match.params;
  return(
    <Fragment>
      <div className="movements-main">
        { renderSection(type) }
      </div>
      <div className="tab-navigator">
        <NavLink to="/movements/recent" className="tab-navigator__item">RECENT</NavLink>
        <NavLink to="/movements/all" className="tab-navigator__item">ALL</NavLink>
      </div>
    </Fragment>
  );
}

export default Movements;
