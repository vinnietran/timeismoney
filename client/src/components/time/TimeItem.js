import React, { useContext } from "react";
import PropTypes from 'prop-types';
import TimeContext from '../../context/time/timeContext'


const TimeItem = ({ time }) => {
  const timeContext = useContext(TimeContext);
  const {deleteTime} = timeContext

  const { id, client, month, hours, description} = time;

    const onDelete = () => {
     deleteTime(id); 

    }
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {client}{" "}
        <span style={{ float: 'right' }}className="badge-primary">
          {" "}
          {month.charAt(0).toUpperCase() + month.slice(1)}{" "}
        </span>
      </h3>
      <ul className='list'>
        <div>
            Hours Worked: {hours}
        </div>
        <div>
            Description: {description}
        </div>
        
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm"onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

TimeItem.propTypes = {
    time: PropTypes.object.isRequired
  };
export default TimeItem;
