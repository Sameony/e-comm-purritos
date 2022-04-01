import React from "react";
import { Link } from "react-router-dom";
const HeroBanner = () => {
  return (
    <div className="heroImage mg-b-md">
      <div className="heroContent">
        <h1 className="fs-xxl">Pet Burritos!!</h1>
        <p>Get blankets for your pets!</p>
        <Link to="/products">
          <button className="mg-y-sm btn btn-primary">Browse Catalogue</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
