import React, { useContext, useRef, useEffect } from "react";
import TimeContext from "../../context/time/timeContext";

const TimeFilter = () => {
  const timeContext = useContext(TimeContext);
  const text = useRef("");

  const { filterTimes, clearFilter, filtered } = timeContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterTimes(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div className='row'>
      <form>
        <select
          ref={text}
          type="text"
          placeholder="Filter by Month"
          name="month"
          onChange={onChange}
        >
          <option value="" disabled>
           Fileter work completed by Month
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
      </form>
      </div>
  );
};

export default TimeFilter;
