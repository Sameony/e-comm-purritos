import React from 'react'

const Checkout = () => {
  return (
    <div className="basicLight pd-md align-middle textCenter mg-md">
                <h2 className="fs-xl">Price Details</h2>
                <hr />
                <div className="pd-sm flex mg-y-md flex-spc-btw">
                    <p className='fw-xl'>Total Price (3 items)</p>
                    <p><i className="fa-solid fa-indian-rupee-sign"></i>16999</p>
                </div>
                <div className="pd-sm flex mg-y-md flex-spc-btw">
                    <p className='fw-xl'>Promo-Code:</p>
                    <p>firstMeow60</p>
                </div>
                <div className="pd-sm flex mg-y-md  flex-spc-btw">
                    <p className='fw-xl'> Discount</p>
                    <p><i className="fa-solid fa-indian-rupee-sign"></i>2999</p>
                </div>
                <div className="pd-sm flex mg-y-md  flex-spc-btw">
                    <p className='fw-xl'> Delivery Charges</p>
                    <p><i className="fa-solid fa-indian-rupee-sign"></i>500</p>
                </div>
                <hr />
                <div className="pd-sm flex mg-y-md  flex-spc-btw">
                    <p className='fw-xl'>Total Amount</p>
                    <p><i className="fa-solid fa-indian-rupee-sign"></i>14599</p>
                </div>
                <button className="btn btn-success">Checkout</button>
    </div>
  )
}

export default Checkout