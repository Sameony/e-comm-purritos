import React from "react";
import AddRemoveButtons from "./addRemoveButtons";

const WishCard = ({ id, sr, img, prodName, unitPrice, Action }) => {
  const defaultState = {
    id : id,
    imageUrl: img,
    title: prodName,
    price: unitPrice,
}
  return (
    <div className={Action==="prod"?"wishContainer textCenter":""}>
      <div className="wishStrip mg-y-md">
        <h3>{sr}</h3>
        <div className="wishImg align-items-center">
          {img === "Image" ? <h3>Image</h3> : <img src={img} alt="kyot cat" />}
        </div>
        <h3>{prodName}</h3>
        <h3>
          <i className="fa-solid fa-indian-rupee-sign mg-r-sm"></i>
          {unitPrice}
        </h3>
        <div className="wishActionButtons pd-r-sm">
          {Action==="Actions" ? <h3>Actions</h3>: <AddRemoveButtons defaultState={defaultState} />}
        </div>
      </div>
    </div>
  );
};

export default WishCard;
