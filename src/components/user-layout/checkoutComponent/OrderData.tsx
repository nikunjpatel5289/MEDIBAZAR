// "use client"
import { useState } from "react";

interface prop {
    data: [any]
    subtotal : number
    finalTotal: number
    copenCode:number
    handelApplyCoopenCode : (code :string) => void
    // handleSubmit: () => void
}

const OrderData = ({data,handelApplyCoopenCode,subtotal,finalTotal,copenCode}:prop) => {
    const [showBank, setShowBank] = useState(false);
    const [showPaypal, setShowPaypal] = useState(false);
    const [code, setCode] = useState<string>("");

    const handelApply = () => {
        handelApplyCoopenCode(code);
    };
  return (
    <div className="col-md-6">
    <div className="row mb-5">
        <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Coupon Code</h2>
            <div className="p-3 p-lg-5 border">
                <label htmlFor="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
                <div className="input-group w-75">
                    <input type="text" onChange={(e) => setCode(e.target.value)} className="form-control" name="coupon" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code"
                    aria-describedby="button-addon2" />
                    <div className="input-group-append">
                    <button onClick={handelApply} className="btn btn-primary btn-sm px-4" type="button" id="button-addon2">Apply</button>
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
                                <th>Actual Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.productId.prodName} <strong className="mx-2 font-bold">X {item.qty}</strong> </td>
                                        <td className="text-center">Rs.{item.productId.prodPrice}</td>
                                        <td>Rs.{item.productId.prodPrice * item.qty}</td>
                                    </tr>
                                )
                            })}
                            {/* <tr>
                                <td>Ibuprofen <strong className="mx-2">x</strong> 1</td>
                                <td>$45.00</td>
                            </tr> */}
                            <tr>
                                <td className="text-black font-weight-bold" colSpan={2}><strong>Cart Subtotal</strong></td>
                                <td className="text-black">Rs.{subtotal}</td>
                            </tr>
                            {/* {copenCode &&  */}
                                <tr>
                                    <td className="text-black font-weight-bold" colSpan={2}><strong>Copen Code Amount</strong></td>
                                    <td className="text-black">Rs.{copenCode}</td>
                                </tr>
                            {/* } */}
                            <tr>
                                <td className="text-black font-weight-bold" colSpan={2}><strong>Order Total</strong></td>
                                <td className="text-black font-weight-bold"><strong>Rs.{finalTotal}</strong></td>
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

                   
                </div>
            </div>
    </div>
</div>

  )
}

export default OrderData