import React from "react";
import { useCart } from "../utils/cartContext";
import { useWishlist } from "../utils/wishlistContext";
import { IsItemInWishList } from "../utils/wishlistReducer";

const CartCard = ({id, title, img, price, quantity}) => {
  const {dispatchWish} = useWishlist();
  const cartDefault = {
    id : id,
    imageUrl: img,
    title: title,
    price: price,
    quantity: quantity,
}
  const {dispatchCart}= useCart();
  return (
    <div className="cartStrip shadows mg-y-md pd-l-sm">
      <div className="cartImg align-items-center">
        <img src={img} alt={title} />
      </div>
      <div className="cartDetails align-items-center flex-col">
        <h3>{title}</h3>
        <h3 className="fw-xl">
          <i className="fas fa-rupee-sign mg-r-sm"></i>{price}
        </h3>
        <div className="cartQty">
          <button className="btn btn-primary">&nbsp;-&nbsp;</button>
          <input type="text" name="cartInput" value={quantity}  />
          <button className="btn btn-primary">+</button>
        </div>

        <div className="cartActionButtons flex flex-col flex-spc-arnd pd-r-sm">
          {console.log(price)}
          <button className="btn btn-wishlist mg-y-sm" onClick={!IsItemInWishList(id)?()=>dispatchWish({type:"WISH_ADD",payload:cartDefault}):()=>{}}>
            <i className="fas fa-heart mg-r-sm"></i>Move to Wishlist
          </button>
          <button className="btn btn-primary mg-b-sm" onClick={()=>dispatchCart({type:"CART_REMOVE",payload:cartDefault})}>
            <i className="fas fa-trash mg-r-sm"></i>Remove from cart
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default CartCard;
