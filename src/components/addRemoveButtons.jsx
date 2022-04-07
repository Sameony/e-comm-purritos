import React from 'react'
import { useWishlist } from '../utils/wishlistContext'
import { IsItemInCart } from '../utils/cartReducer';
import { useCart } from '../utils/cartContext';
import { Link } from 'react-router-dom';
const AddRemoveButtons = (defaultState) => {

  const {dispatchWish} =useWishlist();
  const {dispatchCart} = useCart();
  return (
    <>
        
        {IsItemInCart(defaultState.defaultState.id)===false?(<button className="btn btn-success mg-y-sm" onClick={()=>dispatchCart({type:"CART_ADD",payload:defaultState.defaultState})}>
                                <i className="fas fa-shopping-cart mg-r-sm">  </i>Add to Cart
                            </button>)
                        :(<Link to="/Cart" className="btn btn-success mg-y-sm">
                                <i  className="fas fa-shopping-cart mg-r-sm"> </i>Go to Cart
                            </Link>)}
          
          <button className="btn btn-caution mg-y-sm" onClick={()=>dispatchWish({type:"WISH_REMOVE",payload:defaultState.defaultState})}>
            <i className="fas fa-trash mg-r-sm"></i>Delete
          </button>
    </>
  )
}

export default AddRemoveButtons