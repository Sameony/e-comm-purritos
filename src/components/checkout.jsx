import React from 'react'

const Checkout = () => {
  return (
    <div className="checkout pd-md align-middle textCenter mg-md">
                <h2 className="fs-xl">Price Details</h2>
                <hr />
                <div className="pd-sm flex mg-y-md flex-spc-btw">
                    <p className="fs-lg">Total Price (3 items)</p>
                    <p className="fs-lg"><i className="fa-solid fa-indian-rupee-sign"></i>16999</p>
                </div>
                <div className="pd-sm flex mg-y-md flex-spc-btw">
                    <p className="fs-lg">Promo-Code:</p>
                    <p className="fs-lg">firstMeow60</p>
                </div>
                <div className="pd-sm flex mg-y-md  flex-spc-btw">
                    <p className="fs-lg">Discount</p>
                    <p className="fs-lg"><i className="fa-solid fa-indian-rupee-sign"></i>2999</p>
                </div>
                <div className="pd-sm flex mg-y-md  flex-spc-btw">
                    <p className="fs-lg">Delivery Charges</p>
                    <p className="fs-lg"><i className="fa-solid fa-indian-rupee-sign"></i>500</p>
                </div>
                <hr />
                <div className="pd-sm flex mg-y-md  flex-spc-btw">
                    <p className="fs-lg">Total Amount</p>
                    <p className="fs-lg"><i className="fa-solid fa-indian-rupee-sign"></i>14599</p>
                </div>
                <button className="btn btn-success">Checkout</button>
    </div>
  )
}

export default Checkout