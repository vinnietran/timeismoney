import React, { useContext } from "react";
import PropTypes from 'prop-types';
import TimeContext from '../../context/time/timeContext'


const TimeItem = ({ time }) => {
  const timeContext = useContext(TimeContext);
  const {deleteTime, setCurrent, clearCurrent} = timeContext

  const { _id, client, month, hours, description} = time;
  

    const onDelete = () => {
     deleteTime(_id); 
      clearCurrent();
    }
  return (
    <div className="card bg-light" className='"card-panel teal lighten-2"'>
      <h3 className="blue-text text-darken-2 text-left">
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
        <button className="waves-effect waves-teal btn-flat"onClick={() => setCurrent(time)}> Edit</button>
        <button className="waves-effect waves-teal btn-flat"onClick={onDelete}>Delete</button>
      </p>
    </div>

/* <table className='highlight' className='centered'>
<thead>
  <tr>
      <th>Month Completed</th>
      <th>Client Name</th>
      <th>Hours Worked</th>
      <th>Description</th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>{month.charAt(0).toUpperCase() + month.slice(1)}{" "}</td>
    <td>{client}{" "}</td>
    <td>{hours}</td>
    <td>{description}</td>
    <td><button className="btn btn-dark btn-sm"onClick={() => setCurrent(time)}> Edit</button></td>
    <td><button className="btn btn-danger btn-sm"onClick={onDelete}>Delete</button></td>
  </tr>
</tbody>
</table> */



    
  );
 
};

TimeItem.propTypes = {
    time: PropTypes.object.isRequired
  };
export default TimeItem;
