import React from "react";
import { FeaturedCard, HeroBanner } from "../components";
import { GetCategory } from "../utils/categoryContext";
const Landing = () => {
  const {categories} = GetCategory();
  const categoryMapper = () =>categories?.map((item) => {
    return (
      <FeaturedCard
      key={item._id}
      _id={item._id}
      disName={item.disName}
      coverImg={item.coverImg}
      description={item.description}
      />
    );
  });
  return (
    <div className="landingWrapper pureLight">
      <HeroBanner />
      <div className="frontCards">
        {categoryMapper()}
      </div>
    </div>
  );
};

export default Landing;
