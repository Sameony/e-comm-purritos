import { createContext, useContext,useReducer } from "react";
import { CartReducer } from "./cartReducer";
// default cartItem obj format
// const cartDefault = {
//     id : 0,
//     imageUrl: "",
//     title: "",
//     price: 0,
//     quantity: 1,
// }
const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    const [state, dispatchCart] = useReducer(CartReducer,{
        CartItems : []
    });
    return (
        <CartContext.Provider value={{ state, dispatchCart }}>
            {children}
        </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
