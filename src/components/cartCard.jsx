import React from "react";

const CartCard = () => {
  return (
    <div className="cartStrip mg-y-md">
      <div className="cartImg align-items-center">
        <img src="/Images/kyotComfy.jpg" alt="kyot cat" />
      </div>
      <div className="cartDetails align-items-center flex-col">
        <h3>White blanket</h3>
        <h3 className="fw-xl">
          <i className="fa-solid fa-indian-rupee-sign mg-r-sm"></i>11999
        </h3>
        <div className="cartQty">
          <button className="btn btn-primary">&nbsp;-&nbsp;</button>
          <input type="text" name="cartInput" value="2" />
          <button className="btn btn-primary">+</button>
        </div>

        <div className="cartActionButtons flex flex-col flex-spc-arnd pd-r-sm">
          <button className="btn btn-wishlist mg-y-sm">
            <i className="fas fa-heart mg-r-sm"></i>Add to Wishlist
          </button>
          <button className="btn btn-primary mg-b-sm">
            <i className="fas fa-trash mg-r-sm"></i>Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
