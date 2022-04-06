import React from "react";
import { Filters, ProductCard } from "../components";
import { useFilters } from "../utils";
import { EmptyProduct } from "../components";
const Products = () => {
  const prodList = useFilters().filteredList;
  const productMapping = () =>
    prodList.map((item) => {
      return (
        <ProductCard
          key={item._id}
          id = {item._id}
          cardTitle={item.title}
          cardReviews={item.reviews}
          cardRating={item.rating}
          Price={item.price}
          prevPrice={item.prevPrice}
          img={item.imageUrl}
        />
      );
    });
  return (
    <>
     <div className="navShadow"></div>
     <div className="pageContainer">
      
      <Filters />
      <div></div>
      {prodList.length ? (<div className="pageContent pd-md">{productMapping()}</div>) 
      : EmptyProduct("PRODUCT"
      )}
    </div></>
    
  );
};

export default Products;
