import { createContext, useContext,useReducer } from "react";
import { wishListReducer } from "./wishlistReducer";

const WishlistContext = createContext();
export const WishlistContextProvider = ({ children }) => {
    const [state, dispatchWish] = useReducer(wishListReducer,{
        wishlistItems : []
    });
    return (
        <WishlistContext.Provider value={{ state, dispatchWish }}>
            {children}
        </WishlistContext.Provider>
  );
};
export const useWishlist = () => useContext(WishlistContext);
