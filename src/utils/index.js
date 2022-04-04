import { FilterContextProvider, useFilters } from "./filterContext";
import { filterReducer } from "./filterReducer";
import {
  CategoryHandler,
  ratingFunction,
  sortprodList,
  pricingFunction,
} from "./filterComposition";
import { useProducts } from "./axiosProduct";
import { GetProducts } from "./productContext";

export {
  FilterContextProvider,
  useFilters,
  filterReducer,
  CategoryHandler,
  ratingFunction,
  sortprodList,
  pricingFunction,
  useProducts,
  GetProducts,
};
