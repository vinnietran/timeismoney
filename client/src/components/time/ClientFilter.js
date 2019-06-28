import React, { useContext, useRef, useEffect } from "react";
import TimeContext from "../../context/time/timeContext";


const ClientFilter = () => {
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
    <div className="row">
      <form>
        <select
          ref={text}
          type="text"
          placeholder="Filter by Month"
          name="month"
          onChange={onChange}
        >
          <option value="" disabled>
            Filter work completed by Client
          </option>
          <option value="Reed Smith and Company">Reed Smith and Company</option>
          <option value="McDonald's Farm">McDonald's Farm</option>
          <option value="WeWork">WeWork</option>
          <option value="Sheetz">Sheetz</option>
          <option value="Davis Auto">Davis Auto</option>
        </select>
      </form>
    </div>
  );
};

export default ClientFilter;
