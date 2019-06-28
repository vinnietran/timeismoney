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
    if (current === null) {
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
  };
  return (
    <div id="add-time-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <form onSubmit={onSubmit}>
          <h4 class="center-align">
            {current ? "Edit Time Entry" : "Add New Time Entry"}
          </h4>
          <div className="row">
            <input
              type="text"
              placeholder="Enter client name"
              name="client"
              value={client}
              onChange={onChange}
            />
          </div>

          <div className="row">
            <select
              type="text"
              placeholder="Enter month worked"
              name="month"
              value={month}
              onChange={onChange}
            >
              <option value="" disabled>
                Select Month Work Completed
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>

          <div className="row">
            <input
              type="text"
              placeholder="Enter number of hours worked"
              name="hours"
              value={hours}
              onChange={onChange}
            />
          </div>

          <div className="row">
            <input
              type="text"
              placeholder="Enter a brief description of completed work"
              name="description"
              value={description}
              onChange={onChange}
            />
          </div>

          <container>
            <div className="row" />
            <div className="row">
              <div className="col s12">
                <input
                  type="submit"
                  name="submit"
                  value={current ? "Update Time Entry" : "Submit Time Entry"}
                  className="btn btn-primary btn-block"
                  id="submit"
                />
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                {current && (
                  <div>
                    <button
                      className="btn btn-light btn-block"
                      id="clear"
                      onClick={clearAll}
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>
            </div>
          </container>
        </form>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "50%",
  height: "100%"
};

export default TimeForm;
