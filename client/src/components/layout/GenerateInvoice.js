import React from "react";

function handleClick(e) {
  e.preventDefault();
  window.location.href='https://drive.google.com/open?id=1mLQxG_cUpvgSrkDw4rEdaSFwpQeT6DwX'
  console.log('The link was clicked.');
}

const InvoiceBtn = () => {
  return (
    <div className="row">
      <div>
        <button id='invBtn'
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={handleClick}
        >
          Generate Invoice
          <i class="material-icons right">assignment</i>
        </button>
      </div>
      {/* <div>
        <li><a class="grey-text text-lighten-3"
                href="https://drive.google.com/open?id=1mLQxG_cUpvgSrkDw4rEdaSFwpQeT6DwX" className='button' target="blank">My Resumé</a>
            </li>
        <button onclick="window.location.href='https://drive.google.com/open?id=1mLQxG_cUpvgSrkDw4rEdaSFwpQeT6DwX'">
          Continue
        </button>
      </div> */}
    </div>
  );
};

export default InvoiceBtn;
