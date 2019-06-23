import React, { useState, useContext, useEffect } from "react";
import TimeContext from "../../context/time/timeContext";

const TimeForm = () => {
  const timeContext = useContext(TimeContext);

  const { addTime, updateTime, clearCurrent, current } = timeContext;

  useEffect(() => {
    if (current !== null) {
      setTime(current); 
    } else {
      setTime({
        client: "",
        month: "",
        hours: "",
        description: ""
      });
    }
  }, [timeContext, current]);

  const [time, setTime] = useState({
    client: "",
    month: "",
    hours: "",
    description: ""
  });

  const { client, month, hours, description } = time;

  const onChange = e => setTime({ ...time, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if(current === null) {
      addTime(time);
    } else {
      updateTime(time);
    }
    
    setTime({
      client: "",
      month: "",
      hours: "",
      description: ""
    });
  };

  const clearAll = () => {
    clearCurrent();
  }
  return (
    <div id='add-time-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? 'Edit Time Entry' : 'Add New Time Entry'}</h2>
      <input
        type="text"
        placeholder="Enter client name"
        name="client"
        value={client}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Enter month worked"
        name="month"
        value={month}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Enter number of hours worked"
        name="hours"
        value={hours}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Enter a brief description of completed work"
        name="description"
        value={description}
        onChange={onChange}
      />
      <div>
      <input
        type="submit"
        name="submit"
        value={current ? 'Update Time Entry' : 'Submit Time Entry'}
        className="btn btn-primary btn-block"
      />
      </div>
      {current && <div>
        <button className='btn btn-light btn-block'onClick={clearAll}>Clear</button>
      </div>}
    </form>
    </div>
    </div>
  );
};

const modalStyle = {
  width: '75%', 
  height: '75%'
}


export default TimeForm;
