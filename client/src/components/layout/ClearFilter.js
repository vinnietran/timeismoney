import React from "react";

const ClearFilter = () => {
  return (
    <div>
      <div className="row">
        <div>
          <button
            id="invBtn"
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
            // onclick={handleClick}
          >
            Clear Filter
            <i class="material-icons right">filter_list</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearFilter;
