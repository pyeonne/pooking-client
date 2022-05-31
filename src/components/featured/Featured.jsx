import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Dublin"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Austin"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h1>532 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="Reno"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h1>533 properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
