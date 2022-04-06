import React from 'react'
import { useCart } from '../utils/cartContext'
const Checkout = () => {
    const {state} = useCart();
    const total = state.CartItems.reduce((acc,curr)=>{
        let smolSum = curr.price * curr.quantity;
        acc.total=acc.total+smolSum;
        acc.count+=curr.quantity;
        return acc;
    },{total:0, count:0})
    let Discount = 0.2*total.total;
    let delivery = 20*total.count;
    
  return (
    <div className="basicLight pd-md align-middle textCenter mg-md">
                <h2 className="fs-xl">Checkout Details</h2>
                <hr />
                <div className="pd-sm flex mg-y-md flex-spc-btw">
                    <p className='fw-xl'>Total Price ({total.count} items)</p>
                    <p><i className="fas fa-rupee-sign"></i> {total.total}</p>
                </div>
                <div className="pd-sm flex mg-y-md flex-spc-btw">
                    <p className='fw-xl'>Promo-Code:</p>
                    <p>FIRSTMEOW20</p>
                </div>
                <div className="pd-sm flex mg-y-md  flex-spc-btw">
                    <p className='fw-xl'> Discount</p>
                    <p><i className="fas fa-rupee-sign"></i> {Discount}</p>
                </div>
                <div className="pd-sm flex mg-y-md  flex-spc-btw">
                    <p className='fw-xl'> Delivery Charges</p>
                    <p><i className="fas fa-rupee-sign"></i> {delivery}</p>
                </div>
                <hr />
                <div className="pd-sm flex mg-y-md  flex-spc-btw">
                    <p className='fw-xl'>Total Amount</p>
                    <p><i className="fas fa-rupee-sign"></i> {total.total - Discount + delivery}</p>
                </div>
                <button className="btn btn-success">Checkout</button>
    </div>
  )
}

export default Checkout