import useAxios from "./axiosProduct";
import { createContext, useContext } from "react";
import { useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [api, setApi] = useState("/api/products");
  const {responseData, loading, errorFlag} = useAxios(api);
  const products = responseData?.products||[];
  console.log(products)
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProducts = () => useContext(ProductContext);

