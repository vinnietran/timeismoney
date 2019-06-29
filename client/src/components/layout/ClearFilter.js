import React from "react";
import TimeContext from "../../context/time/timeContext";

const { clearCurrent, current } = TimeContext;

const clearAll = e => {
  e.preventDefault();
  clearCurrent();
  console.log("Fucking fuck");
};

const ClearFilter = () => {
  return (
    <div>
      <div className="row">
        <div>
          <button
            id="invBtn"
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onclick={clearAll}
          >
            Clear Filter
            <i className="material-icons right">filter_list</i>
          </button>
        </div>
      </div>
{/* 
   {current && (
            <div>
              <button className="btn waves-effect waves-light" id="invBtn" onClick={clearAll} >
                Clear
              </button>
            </div>
          )} */}

      {/* <button
        className="btn waves-effect waves-light"
        id="deleteBTN"
        onClick={clearAll}
      >
        Delete
      </button> */}
    </div>
  );
};

export default ClearFilter;
