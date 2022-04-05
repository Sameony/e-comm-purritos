import React from "react";
import { WishCard } from "../components";
import { useWishlist } from "../utils/wishlistContext";
import { EmptyProduct } from "../components";
const Wishlist = () => {
  const {state} = useWishlist();
  const wishlist = state.wishlistItems;
  const wishListMapping = () =>
    wishlist.map((item, index) => {
      return (
        <WishCard
          key={item.id}
          id={item.id}
          sr = {index+1}
          prodName={item.title}
          unitPrice={item.price}
          prevPrice={item.prevPrice}
          img={item.imageUrl}
          Action={"prod"}
        />
      );
    });
  return (
    <div className="wishWrap">
      <h1 className="textCenter mg-b-lg">My Wishlist</h1>
      <WishCard sr={"#"}
        prodName={"Product Name"}
        unitPrice={"Unit Price"}
        img={"Image"}
        Action={"Actions"}
      />

      {wishlist.length ? wishListMapping():EmptyProduct("WISHLIST")}

    </div>
  );
};

export default Wishlist;
