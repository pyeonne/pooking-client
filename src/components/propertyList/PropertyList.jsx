import React from "react";
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="propertyList">
      <div className="propertyListItem">
        <img
          src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="hotels"
          className="propertyListImg"
        />
        <div className="propertyListTitles">
          <h3>Hotels</h3>
          <p>2331 hotels</p>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="apartments"
          className="propertyListImg"
        />
        <div className="propertyListTitles">
          <h3>Apartments</h3>
          <p>2331 apartments</p>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="resorts"
          className="propertyListImg"
        />
        <div className="propertyListTitles">
          <h3>Resorts</h3>
          <p>2331 resorts</p>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FiaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="cabins"
          className="propertyListImg"
        />
        <div className="propertyListTitles">
          <h3>Cabins</h3>
          <p>2331 cabins</p>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="villas"
          className="propertyListImg"
        />
        <div className="propertyListTitles">
          <h3>Villas</h3>
          <p>2331 villas</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
