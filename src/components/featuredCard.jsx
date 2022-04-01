import React from "react";
import { Link } from "react-router-dom";
const FeaturedCard = ({heading, button}) => {
  return (
    <div className="miniHero m2 pd-sm">
      <h3 className="mg-b-md">{heading}</h3>
      <Link to="/products" className="mg-y-sm btn btn-primary">
        {button}
      </Link>
    </div>
  );
};

export default FeaturedCard;
