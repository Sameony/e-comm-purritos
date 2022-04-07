import { useCart } from "./cartContext";

export const CartReducer = (state, action) => {
  console.log(action.payload)  
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
    case "CART_QUANTITY":
      return {
        ...state,
        CartItems: state.CartItems.map((item)=>{ 
            item.quantity=item.id===action.payload.id?action.payload.quantity:item.quantity
          return item})
      }
    default:
      return state;
  }
};


export const IsItemInCart = (id) => {
    const { state } = useCart();
    return (state.CartItems.length>=1 && state.CartItems.filter((item) => item.id === id).length > 0)
  };