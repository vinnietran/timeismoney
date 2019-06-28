import React from "react";
import {Link} from "react-router-dom";


    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    //   window.open('http://www.example.com','_blank','resizable=yes')


    }
  
    
  

const InvoiceBtn = () => {
  return (
    <div className="row">
      <div className="col s12">
        <button
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
