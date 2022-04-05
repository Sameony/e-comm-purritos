import React from 'react'
import { useWishlist } from '../utils/wishlistContext'

const AddRemoveButtons = (defaultState) => {
  const {dispatchWish} =useWishlist();
  return (
    <>
        <button className="btn btn-success mg-y-sm">
            <i className="fas fa-shopping-cart mg-r-sm"></i>Add to Cart
          </button>
          <button className="btn btn-caution mg-y-sm" onClick={()=>dispatchWish({type:"WISH_REMOVE",payload:defaultState.defaultState})}>
            <i className="fas fa-trash mg-r-sm"></i>Delete
          </button>
    </>
  )
}

export default AddRemoveButtons