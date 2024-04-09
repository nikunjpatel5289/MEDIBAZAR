import { useState } from "react";

interface prop {
  total: number;
  // finalTotal: number
  // copenCode:number
  // handelApplyCoopenCode: (code: string) => void;
}

const CartTotal = ({ total }: prop) => {
  // , finalTotal ,copenCode ,handelApplyCoopenCode
  // const [code, setCode] = useState<string>("");

  // const handelApply = () => {
  //   handelApplyCoopenCode(code);
  // };
  return (
    <div className="row">
      <div className="col-md-6">
        {/* <div className="row">
          <div className="col-md-12">
            <label className="text-black h4" htmlFor="coupon">
              Coupon
            </label>
            <p>Enter your coupon code if you have one.</p>
          </div>
          <div className="col-md-8 mb-3 mb-md-0">
            <input
              type="text"
              className="form-control py-3"
              onChange={(e) => setCode(e.target.value)}
              id="coupon"
              placeholder="Coupon Code"
            />
          </div>
          <div className="col-md-4">
            <button
              onClick={handelApply}
              type="button"
              className="btn btn-primary btn-md px-4"
            >
              Apply Coupon
            </button>
          </div>
        </div> */}
      </div>
      <div className="col-md-6 pl-5">
        <div className="row justify-content-end">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12 text-right border-bottom mb-5">
                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
              </div>
            </div>
            {/* <div className="row mb-3">
              <div className="col-md-6">
                <span className="text-black">Subtotal</span>
              </div>
              <div className="col-md-6 text-right">
                <strong className="text-black">Rs. {total}.00</strong>
              </div>
            </div> */}

            {/* <div className="row mb-3">
              <div className="col-md-6">
                <span className="text-black">Copen-Code Amount</span>
              </div>
              <div className="col-md-6 text-right">
                <strong className="text-black">Rs. {copenCode}.00</strong>
              </div>
            </div> */}

            <div className="row mb-5">
              <div className="col-md-6">
                <span className="text-black">Total</span>
              </div>
              <div className="col-md-6 text-right">
                <strong className="text-black">Rs. {total}.00</strong>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <button className="btn btn-primary btn-lg btn-block">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
