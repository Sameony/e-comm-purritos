import { useWishlist } from "./wishlistContext";

export const wishListReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "WISH_ADD":
      return  { ...state, wishlistItems: [...state.wishlistItems, action.payload] }
    case "WISH_REMOVE":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};


export const IsItemInWishList = (id) => {
    const { state } = useWishlist();
    return (state.wishlistItems.length>=1 && state.wishlistItems.filter((item) => item.id === id).length > 0)
  };