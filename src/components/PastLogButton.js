import React from 'react';
import './PastLog.css';
import { ChevronRightIcon } from '../icons';
import { withRouter } from 'react-router-dom';

const PastLogButton = withRouter(({id, created_at, handleClick, history}) => {
  return(
    <div
      onClick={()=>{
        history.push(`/logs/${id}`);
      }}
      className="logs__past-item">
      <p>{new Date(created_at).toLocaleString()}</p>
      <ChevronRightIcon width={20} height={20} color="#FFF"/>
    </div>
  )
});

export default PastLogButton;
