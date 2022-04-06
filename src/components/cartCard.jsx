import React from "react";
import { useCart } from "../utils/cartContext";
const CartCard = ({id, Title, img, price, quantity}) => {
  const cartDefault = {
    id : id,
    imageUrl: img,
    title: Title,
    price: price,
    quantity: quantity,
}
  const {dispatchCart}= useCart();
  return (
    <div className="cartStrip mg-y-md">
      <div className="cartImg align-items-center">
        <img src={img} alt={Title} />
      </div>
      <div className="cartDetails align-items-center flex-col">
        <h3>{Title}</h3>
        <h3 className="fw-xl">
          <i className="fa-solid fa-indian-rupee-sign mg-r-sm"></i>{price}
        </h3>
        <div className="cartQty">
          <button className="btn btn-primary">&nbsp;-&nbsp;</button>
          <input type="text" name="cartInput" value={quantity} />
          <button className="btn btn-primary">+</button>
        </div>

        <div className="cartActionButtons flex flex-col flex-spc-arnd pd-r-sm">
          <button className="btn btn-wishlist mg-y-sm">
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
