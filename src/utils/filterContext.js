import { filterReducer } from "./filterReducer";
import { sortprodList, ratingFunction, CategoryHandler, pricingFunction } from "./filterComposition";
import { useProducts } from "./productContext";
import { createContext, useContext, useReducer } from "react";


const FilterContext = createContext();

const compose =
  (state, ...allFilters) =>
  (data) => {
    return allFilters.reduce((acc, curr) => {
      return curr(state, acc);
    }, data);
  };

export const FilterContextProvider = ({ children }) => {
  const {products}=useProducts();
  console.log(products)
  const [state, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    rating: 1,
    category: [ ],
    maxPrice: 25000,
  });
  
  const filteredList = compose(
    state,
    pricingFunction,
    sortprodList,
    ratingFunction,
    CategoryHandler,
  )(products);
  

  return (
    <FilterContext.Provider value={{ state, filterDispatch, filteredList }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);
