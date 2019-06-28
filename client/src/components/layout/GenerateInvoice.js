import React from "react";

function handleClick() {
  // e.preventDefault();
  console.log("The link was clicked.");
  // var url =
  //   "https://drive.google.com/open?id=1I7Pd0hnfoPfNRI7HYia5scZtExht_1Av";
  // window.location(url);
}

const InvoiceBtn = () => {
  return (
    <div className="row">
      <div>
        <button id='invBtn'
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
          onclick={handleClick}
        >
          Generate Invoice
          <i class="material-icons right">assignment</i>
        </button>
      </div>
    </div>
  );
};

export default InvoiceBtn;
