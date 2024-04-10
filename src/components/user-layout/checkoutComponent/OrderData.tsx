// "use client"
import { useState } from "react";

const OrderData = () => {
    const [showBank, setShowBank] = useState(false);
    // const [showCheque, setShowCheque] = useState(false);
    const [showPaypal, setShowPaypal] = useState(false);
  return (
    <div className="col-md-6">
    <div className="row mb-5">
        <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Coupon Code</h2>
            <div className="p-3 p-lg-5 border">
                <label htmlFor="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
                <div className="input-group w-75">
                    <input type="text" className="form-control" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code"
                    aria-describedby="button-addon2" />
                    <div className="input-group-append">
                    <button className="btn btn-primary btn-sm px-4" type="button" id="button-addon2">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="row mb-5">
        <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Your Order</h2>
                <div className="p-3 p-lg-5 border">
                    <table className="table site-block-order-table mb-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bioderma <strong className="mx-2">x</strong> 1</td>
                                <td>$55.00</td>
                            </tr>
                            <tr>
                                <td>Ibuprofen <strong className="mx-2">x</strong> 1</td>
                                <td>$45.00</td>
                            </tr>
                            <tr>
                                <td className="text-black font-weight-bold" colSpan={2}><strong>Cart Subtotal</strong></td>
                                <td className="text-black">$350.00</td>
                            </tr>
                            <tr>
                                <td className="text-black font-weight-bold" colSpan={2}><strong>Order Total</strong></td>
                                <td className="text-black font-weight-bold"><strong>$350.00</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="border mb-3">
                        <h3 className="h6 mb-0">
                            <a className="d-block" onClick={() => setShowBank(!showBank)} aria-expanded={showBank} aria-controls="collapsebank" role="button" >
                                Direct Bank Transfer
                            </a>
                        </h3>
                        {showBank && (
                            <div className="py-2 px-4">
                                <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                        payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                            </div>
                        )}
                    </div>
                    {/* <div className="border mb-3">
                        <h3 className="h6 mb-0">
                            <a className="d-block"  onClick={() => setShowCheque(!showCheque)} role="button"
                            aria-expanded={showCheque} aria-controls="collapsecheque">Cheque Payment</a>
                        </h3>
                            {showCheque && (
                                <div className="py-2 px-4">
                                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                                    payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                </div>
                            )}
                    </div> */}
                    <div className="border mb-4">
                        <h3 className="h6 mb-0">
                            <a className="d-bloc"  onClick={() => setShowPaypal(!showPaypal)} role="button"
                            aria-expanded={showPaypal} aria-controls="collapsepaypal">Paypal</a>
                        </h3>
                            {showPaypal && (
                                <div className="py-2 px-4">
                                    <p className="mb-0">MMake your payment directly into our bank account. Please use your Order ID as the
                    payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                </div>
                            )}
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-lg btn-block">Place Order</button>
                    </div>
                </div>
            </div>
    </div>
</div>

  )
}

export default OrderData