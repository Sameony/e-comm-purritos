import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useWishlist } from "../utils/wishlistContext";
import { useCart } from "../utils/cartContext";
const NavBar = () => {
  const {state} = useWishlist();
  const cartState = useCart();
  return (
      <>
    <nav className="navBar basicDark">
      <Link to="/">
        <h1 className="pd-x-md mg-x-md fs-xxl">Purritos</h1>
      </Link>
      <div className="boxInput pd-sm">
        <label htmlFor="name" className="mg-x-sm fs-lg">
          <i className="fas fa-search"></i>
        </label>
        <input type="text" id="name" className="searchBox pd-sm" />
      </div>

      <div className="rightNav">
        <Link to="/login" className="btn btn-primary mg-r-md">
          Signup
        </Link>
        <Link to="/products" className="align-items-center fs-xl mg-x-md" title="Market">
        <i className="fas fa-store"></i>
        </Link>
        <div className="badgeWrap mg-md" title="My Cart">
          <Link to="cart">
            <div className="fs-xl fas fa-shopping-cart" ></div>
          </Link>
          <div className="fs-sm badge badgeTopRight badgeRed">{cartState.state.CartItems.length>9?("9+"):cartState.state.CartItems.length}</div>
        </div>
        <div className="badgeWrap mg-md" title="My Wishlist">
          <Link to="/wishlist">
            <div className="fs-xl fas fa-heart"></div>
          </Link>
          <div className="fs-sm badge badgeTopRight badgeRed">{state.wishlistItems.length>9?("9+"):state.wishlistItems.length}</div>
        </div>
      </div>
    </nav>
   
    </>
  );
};

export default NavBar;