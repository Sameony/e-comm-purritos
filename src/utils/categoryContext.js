import { createContext, useContext } from "react";
import useAxios from "./axiosProduct";
const categoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const {responseData, loading, errorFlag} = useAxios("/api/categories")
  const categories = responseData?.categories||[];
  return (
    <categoryContext.Provider value={{ categories }}>
      {children}
    </categoryContext.Provider>
  );
};
export const GetCategory = () => useContext(categoryContext);
