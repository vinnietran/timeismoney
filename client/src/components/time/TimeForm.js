import React, { useState, useContext } from "react";
import TimeContext from "../../context/time/timeContext";

const TimeForm = () => {
  const timeContext = useContext(TimeContext);

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
    timeContext.addTime(time);
    setTime({
      client: "",
      month: "",
      hours: "",
      description: ""
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Time</h2>
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
      <input
        type="submit"
        name="submit"
        value="Submit Time Entry"
        className="btn btn-primary btn-block"
      />
    </form>
  );
};

export default TimeForm;
