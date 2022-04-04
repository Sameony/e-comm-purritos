import React from "react";
import { Filters, ProductCard } from "../components";
import { useFilters } from "../context/filterContext";
import { EmptyProduct } from "../components/emptyProduct";
const Products = () => {
  const prodList = useFilters().filteredList;
  const productMapping = () =>
    prodList.map((item) => {
      return (
        <ProductCard
          key={item._id}
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
    <div className="pageContainer">
      <Filters />
      <div></div>
      {prodList.length ? (
        <div className="pageContent pd-md">{productMapping()}</div>
      ) : (
        <EmptyProduct />
      )}
    </div>
  );
};

export default Products;
