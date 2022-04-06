import { useCart } from "./cartContext";

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "CART_ADD":
      return  { ...state, CartItems: [...state.CartItems, action.payload] }
    case "CART_REMOVE":
      return {
        ...state,
        CartItems: state.CartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};


export const IsItemInCart = (id) => {
    const { state } = useCart();
    return (state.CartItems.length>=1 && state.CartItems.filter((item) => item.id === id).length > 0)
  };