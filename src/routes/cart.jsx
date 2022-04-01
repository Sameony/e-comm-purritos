import React from "react";
import { CartCard, Checkout } from "../components";

const Cart = () => {
  return (
    <>
      <div className="filters">
        <h1 className="textCenter mg-b-lg">My Cart</h1>
        <div className="cartPage">
          <div className="cartWrap">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <Checkout />
        </div>
      </div>
    </>
  );
};

export default Cart;
