"use client";
import "@/app/main.css";
import Footer from "@/components/user-layout/Footer";
import Header from "@/components/user-layout/Header";
// import { useParams } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [val, setVal] = useState(1);

  const handleINC = () => setVal(val+1);
  const handleDEC = () => setVal( val > 1 ? val-1 : val);
  
    // const param = useParams();
  //   console.log(param.product);
  return (
    <>
      <Header />
        <div className="site-section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="mr-auto">
                  <div className="border text-center">
                    <img
                      src="../images/product_07_large.png"
                      alt="Image"
                      height={"75%"}
                      className="img-fluid p-5"
                    />
                  </div>
                </div>
              <div>
                <h2 className="text-black text-2xl">Ibuprofen Tablets, 200mg</h2>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, vitae, explicabo? Incidunt facere, natus soluta
                  dolores iusto! Molestiae expedita veritatis nesciunt doloremque
                  sint asperiores fuga voluptas, distinctio, aperiam, ratione
                  dolore.
                </p>
                <p className="mt-2">
                  <del className="text-gray-500">$95.00</del>{" "}
                  <strong className="text-primary text-lg">$55.00</strong>
                </p>
                <div className="mt-4">
                  <div className="flex items-center border border-gray-300 rounded overflow-hidden w-40">
                    <button className="px-3 py-2 bg-gray-200" onClick={handleDEC}>-</button>
                      <input
                        type="text"
                        className="text-center w-full bg-gray-100 text-black"
                        value={val}
                        disabled
                      />
                    <button className="px-3 py-2 bg-gray-200" onClick={handleINC}>+</button>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="buy-now inline-block px-4 py-3 btn-primary" >
                    Add To Cart
                  </button>
                </div>
                
                <div className="mt-5">
                  <div>
                    <div>
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Material</th>
                            <th>Description</th>
                            <th>Packaging</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">OTC022401</td>
                            <td>
                              Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg,
                              100/Bottle
                            </td>
                            <td>1 BT</td>
                          </tr>
                          <tr>
                            <td scope="row">OTC022401</td>
                            <td>
                              Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg,
                              100/Bottle
                            </td>
                            <td>144/CS</td>
                          </tr>
                          <tr>
                            <td scope="row">OTC022401</td>
                            <td>
                              Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg,
                              100/Bottle
                            </td>
                            <td>1 EA</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="my-10">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>HPIS CODE</td>
                            <td>999_200_40_0</td>
                          </tr>
                          <tr>
                            <td>HEALTHCARE PROVIDERS ONLY</td>
                            <td>No</td>
                          </tr>
                          <tr>
                            <td>LATEX FREE</td>
                            <td>Yes, No</td>
                          </tr>
                          <tr>
                            <td>MEDICATION ROUTE</td>
                            <td>Topical</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default page;
