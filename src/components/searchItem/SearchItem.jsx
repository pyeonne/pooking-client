import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="hotel"
        className="searchItemImg"
      />
      <div className="searchItemDesc">
        <h2 className="searchItemTitle">Tower Street Apartments</h2>
        <span className="searchItemDistance">500m from center</span>
        <span className="searchItemTaxiOption">Free airport taxi</span>
        <span className="searchItemSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchItemFeatures">
          Entire studio · 1 bathroom · 21m² 1 full bed
        </span>
        <span className="searchItemCancelOption">Free cancellation</span>
        <span className="searchItemCancelOptionSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchItemDetails">
        <div className="searchItemRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchItemDetailTexts">
          <span className="searchItemPrice">$123</span>
          <span className="searchItemTaxOption">Includes taxes and fees</span>
          <button className="searchItemCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
