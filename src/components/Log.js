import React, { Fragment } from 'react';
import LogItem from './LogItem';
import { PlusIcon } from '../icons';
import { Query } from 'react-apollo';
import { GET_LOG } from '../queries';
import { Link } from 'react-router-dom';
import LogButton from './LogButton';

const Log = (props) => (
  <Fragment>
    <Query query={GET_LOG}>
    { ({ data: {currentLog, loading, error} }) => {
      if(!props.main.current) return null;
      if(loading) return 'Loading';
      if(error) return 'Error';
      return currentLog.items.map( (log, index) =>{
        return <LogItem main={props.main} key={log.id} index={index} {...log}/>
      })
    }}
    </Query>
    <Link to="/movements/all">
      <button className="btn--large">
        <PlusIcon width={30} height={30} color="#FFF"/>
      </button>
    </Link>
    <LogButton/>
  </Fragment>
);

export default Log;
