import React from "react";
import { WishCard } from "../components";

const Wishlist = () => {
  return (
    <div className="wishWrap">
      <h1 className="textCenter mg-b-lg">My Wishlist</h1>
      <WishCard sr={"#"}
      prodName={"Product Name"}
      unitPrice={"Unit Price"}
      img={"Image"}
      Action={"Actions"}
      />
      
      <WishCard sr={"1"}
      prodName={"Red blanket (does not include cat)"}
      unitPrice={"11999"}
      img={"Images/kyotRedBlanky.jpg"}
      Action={"prod"}
      />
      <WishCard sr={"2"}
      prodName={"Red blanket (does not include cat)"}
      unitPrice={"11999"}
      img={"Images/kyotRedBlanky.jpg"}
      Action={"prod"} />
      <WishCard sr={"3"}
      prodName={"Red blanket (does not include cat)"}
      unitPrice={"11999"}
      img={"Images/kyotRedBlanky.jpg"}
      Action={"prod"} />
      <WishCard sr={"4"}
      prodName={"Red blanket (does not include cat)"}
      unitPrice={"11999"}
      img={"Images/kyotRedBlanky.jpg"}
      Action={"prod"} />
    </div>
  );
};

export default Wishlist;
