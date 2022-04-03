import { GetProducts } from "../utils/axiosProduct";
import { createContext, useContext } from "react";
import { products } from "../backend/db/products";

const ProductContext = createContext(products);

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ ProductContext }}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext};
