import { FilterContextProvider, useFilters } from "./filterContext";
import { filterReducer } from "./filterReducer";
import {
  CategoryHandler,
  ratingFunction,
  sortprodList,
  pricingFunction,
} from "./filterComposition";
import { WishlistContextProvider } from "./wishlistContext";
import { CartContextProvider } from "./cartContext";
import { CategoryProvider } from "./categoryContext";
import { useProducts } from "./productContext";
import useAxios from "./axiosProduct";

export {
  FilterContextProvider,
  useFilters,
  filterReducer,
  CategoryHandler,
  ratingFunction,
  sortprodList,
  pricingFunction,
  useProducts,
  CategoryProvider,
  WishlistContextProvider,
  CartContextProvider,
  useAxios
};
