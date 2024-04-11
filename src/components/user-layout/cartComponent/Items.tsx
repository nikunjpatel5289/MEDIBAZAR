import axios from "axios";
import { useState } from "react";

interface prop {
  data: [any];
  handelInc: (id: string) => void;
  handelDec: (id: string) => void;
  handelRemoveProduct: (id: string) => void;
}

const Items = ({ data, handelInc, handelDec, handelRemoveProduct }: prop) => {
  return (
    <div className="row mb-5">
      {data.length < 1 ? (
        <span className="m-auto text-2xl">No Item In Cart Add Something...</span>
      ) : (
        <form className="col-md-12">
          <div className="site-blocks-table">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="product-thumbnail">Image</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-total">Total</th>
                  <th className="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any) => {
                  return (
                    <tr>
                      <td className="product-thumbnail">
                        <img
                          // src="images/product_02.png"
                          src={item.productId.images[0]}
                          alt={item.productId.prodName}
                          className="img-fluid"
                        />
                      </td>
                      <td className="product-name">
                        <h6 className="text-black w-[180px] m-auto">
                          {item.productId.prodName}
                        </h6>
                      </td>
                      <td>Rs. {item.productId.prodPrice}</td>
                      <td>
                        <div
                          className="input-group mb-3"
                          style={{ maxWidth: "120px" }}
                        >
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-primary js-btn-minus"
                              type="button"
                              onClick={() => handelDec(item.productId._id)}
                            >
                              -
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={item.qty}
                            //   aria-label="Example text with button addon"
                            //   aria-describedby="button-addon1"
                            disabled
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-primary js-btn-plus"
                              onClick={() => handelInc(item.productId._id)}
                              type="button"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>Rs. {item.qty * item.productId.prodPrice}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() =>
                            handelRemoveProduct(item.productId._id)
                          }
                          className="btn btn-primary height-auto btn-sm"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </form>
      )}
    </div>
  );
};

export default Items;
