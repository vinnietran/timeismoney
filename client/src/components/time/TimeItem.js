import React, { useContext } from "react";
import PropTypes from "prop-types";
import TimeContext from "../../context/time/timeContext";

const TimeItem = ({ time }) => {
  const timeContext = useContext(TimeContext);

  const { deleteTime, setCurrent, clearCurrent } = timeContext;

  const { _id, client, month, hours, description } = time;

  

  const onDelete = () => {
    deleteTime(_id);
    clearCurrent();
    console.log('motherfuck');
  };
  return (
    <tr>
      <td>{client}</td>
      <td>{month}</td>
      <td>{hours}</td>
      <td>{description}</td>
      <td>
        <div className>
          <a href="#edit-time-modal">
            <button
              className="btn-floating btn-large blue darken-2 modal-trigger"
              id='editBTN'
              onClick={() => setCurrent(time)}
            >
              {" "}
              Edit
            </button>
          </a>
        </div>
      </td>
      <td>
        <button
          className="waves-effect waves-light btn-small"
          id='deleteBTN'
          onClick={onDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

TimeItem.propTypes = {
  time: PropTypes.object.isRequired
};
export default TimeItem;
