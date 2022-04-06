import React from "react";
import { CartCard, Checkout } from "../components";
import { useCart } from "../utils/cartContext";
import { EmptyProduct } from "../components";
const Cart = () => {
  const {state} = useCart();
  
  const Cart = state.CartItems;
  console.log(Cart)
  const CartMapping = () =>
    Cart.map((item) => {
      return (
        <CartCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          img={item.imageUrl}
          quantity = {item.quantity}
        />
        
      );
    });
  return (
    <>
      <div className="basicDark">
        <h1 className="textCenter mg-b-lg">My Cart</h1>
        <div className="cartPage">
          <div className="cartWrap">
            {Cart.length ? CartMapping() : EmptyProduct("CARTLIST")}  
          </div>
          <Checkout />
        </div>
      </div>
    </>
  );
};

export default Cart;
