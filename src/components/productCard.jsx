import React from 'react'
import { IsItemInWishList } from '../utils/wishlistReducer';
import { useWishlist } from '../utils/wishlistContext';

const ProductCard = ({id, cardTitle, cardReviews, cardRating, Price, prevPrice, img}) => {
    const {dispatchWish} = useWishlist();
    const rounded = Math.round(cardRating*2)/2
    const hasDecimal = rounded%1!==0;
    const roundedWhole = Math.floor(rounded);
    const stars = hasDecimal?roundedWhole+1:roundedWhole;
    
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
                    <button className="btn btn-success fs-md mg-t-sm"><i className="fas fa-shopping-cart mg-r-sm"></i>Add to
                        Cart</button>
                </div>
                    
                    

    </div>
  )
}

export default ProductCard