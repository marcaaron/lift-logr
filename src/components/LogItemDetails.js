import React, {Fragment} from 'react';
import { TrashIcon } from '../icons';
import DuplicateItemButton from './DuplicateItemButton';
import EditButton from './EditButton';

const LogItemDetails = (props) => {
  const { id, exerciseName, previous, reps, weight, unit } = props;
  return(
    <Fragment>
      <div className="log-item__trash">
        <TrashIcon
          width={28}
          height={28}
          color="#FFF"
        />
      </div>
      <div className="log-item__exercise">
        <p className="log-item__exercise__title">{exerciseName}</p>
        <p className="log-item__exercise__previous">previous: {previous.value} {previous.unit}</p>
      </div>
      <div className="log-item__bottom">
        <p className="log-item__detail">
          {reps} x {weight} {unit}
        </p>
        <div className="log-item__controls">
          <EditButton {...props}/>
          <DuplicateItemButton id={id} />
        </div>
      </div>
    </Fragment>
  )
}

export default LogItemDetails;
