import React from 'react'

const ProductCard = () => {
  return (
    <div className="productCard pd-sm mg-sm">
                <img src="Images/kyotAsleep.jpg" alt="red blanket for a cat" />
                <div className="cardContent">
                    <div className="priceContainer mg-y-sm pd-sm">
                        <h3 className="cardHead">White Blanket</h3>
                        <div className="rateMe prim-color">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="productPrice fw-xxl"><i className="fas fa-rupee-sign"></i> 8999
                            <strike className="fs-sm"><i className="fas fa-rupee-sign mg-l-sm"></i>14400</strike>
                        </div>

                    </div>
                </div>
                <div className="filterHead">
                    <button className="btn btn-success mg-y-sm"><i className="fas fa-shopping-cart mg-r-sm"></i>Add to
                        Cart</button>
                    <button className="btn btn-primary mg-y-sm"><i className="fas fa-heart mg-r-sm"></i> Wishlist</button>
                </div>

            </div>
  )
}

export default ProductCard