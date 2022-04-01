import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
const NavBar = () =>
{
    return (
        <nav className="navBar">
        <Link to="/">
            <h1 className="pd-x-md mg-x-md fs-xxl">Purritos</h1>
        </Link>
        <div className="boxInput pd-sm">
            <label for="name" className="mg-x-sm fs-lg"><i className="fas fa-search"></i></label>
            <input type="text" id="name" className="searchBox pd-sm" />
        </div>

        <div className="rightNav">
            <Link to="/login" className="btn btn-primary">Signup</Link>
            <div className="badgeWrap mg-md">
                <Link to="cart">
                    <div className="fs-xl fas fa-shopping-cart"></div>
                </Link>
                <div className="fs-sm badge badgeTopRight badgeRed">2
                </div>
            </div>
            <div className="badgeWrap mg-md">
                <Link to="/wishlist">
                    <div className="fs-xl fas fa-heart"></div>
                </Link>
                <div className="fs-sm badge badgeTopRight badgeRed">9+
                </div>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;