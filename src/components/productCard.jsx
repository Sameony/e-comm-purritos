import React from 'react'
import { IsItemInWishList } from '../utils/wishlistReducer';
import { useWishlist } from '../utils/wishlistContext';
import { useCart } from '../utils/cartContext';
import { IsItemInCart } from '../utils/cartReducer';
import { Link } from "react-router-dom";
const ProductCard = ({id, cardTitle, cardReviews, cardRating, Price, prevPrice, img}) => {
    const {dispatchWish} = useWishlist();
    const {dispatchCart} = useCart();
    const rounded = Math.round(cardRating*2)/2
    const hasDecimal = rounded%1!==0;
    const roundedWhole = Math.floor(rounded);
    const stars = hasDecimal?roundedWhole+1:roundedWhole;
    const cartDefault = {
        id : id,
        imageUrl: img,
        title: cardTitle,
        price: Price,
        quantity: 1,
    }
    const defaultState = {
        id : id,
        imageUrl: img,
        title: cardTitle,
        price: Price,
    }
  return (
    <div className="productCard pd-sm mg-sm">
                <div className='productImage flex align-items-center'><img src={img} alt={cardTitle} /></div>
                <div className="wishListIcon flex align-items-center">
                    {IsItemInWishList(id)===false?(<i className="far fa-heart fs-lg" onClick={()=>dispatchWish({type:"WISH_ADD",payload:defaultState})}></i>)
                    :(<i className="fas fa-heart fs-lg" onClick={()=>dispatchWish({type:"WISH_REMOVE",payload:defaultState})}></i>)}
                    
                </div>
                <div className="cardContent">
                    <div className="priceContainer mg-y-sm pd-sm">
                        <h3 className="cardHead">{cardTitle}</h3>
                        <div className="rateMe prim-color">
                            {/* complete stars */}
                            {[...Array(roundedWhole)].map((e, i) => <i className="fas fa-star" key={i}></i>)}  
                            {/* half stars */}
                            {hasDecimal?<i className="fas fa-star-half-alt"></i>:``}
                            {/* empty stars */}
                            {[...Array(5-stars)].map((e, i) => <i className="far fa-star" key={i}></i>)}
                                <span className='mg-x-sm fw-lg'>{cardRating}</span>
                        </div>
                        <span>({cardReviews} Reviews)</span>
                        <div className="productPrice fw-xxl"><i className="fas fa-rupee-sign"></i> {Price}
                            {prevPrice?<strike className="fs-sm"><i className="fas fa-rupee-sign mg-l-sm"></i>{prevPrice}</strike>:``}
                        </div>

                    </div>
                </div>
                
                <div className='cardActionButtons'>
                    {IsItemInCart(id)===false?(<button className="btn btn-success fs-md mg-t-sm" onClick={()=>dispatchCart({type:"CART_ADD",payload:cartDefault})}>
                                <i className="fas fa-shopping-cart mg-r-sm"> Add to Cart </i>
                            </button>)
                        :(<button className="btn btn-success fs-md mg-t-sm textCenter">
                                <Link to="/Cart" className="fas fa-shopping-cart mg-r-sm">Go to Cart</Link>
                            </button>)
                    }
                </div>
                    
                    

    </div>
  )
}

export default ProductCard