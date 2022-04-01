import React from "react";
import { FeaturedCard, HeroBanner } from "../components";

const Landing = () => {
  return (
    <div className="landingWrapper">
      <HeroBanner />
      <div className="frontCards">
        <FeaturedCard heading="40% off on Red Blankets" button="Check it out" />
        <FeaturedCard heading="Special white day blankets" button="Go white" />
      </div>
    </div>
  );
};

export default Landing;
