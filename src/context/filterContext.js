import { filterReducer } from "../reducers/filterReducer";
import { sortProducts, ratingFunction } from "../utils/filterComposition";
import { GetProducts } from "./productContext";
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
  const products=GetProducts();
  
  const [state, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    rating: 5,
    category: [ ],
    maxPrice: 25000,
  });
  
  const filteredList = compose(
    state,
    sortProducts,
    ratingFunction,
  )(products);
  console.log(filteredList);

  return (
    <FilterContext.Provider value={{ state, filterDispatch, filteredList }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);
