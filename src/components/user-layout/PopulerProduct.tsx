"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopulerProduct = () => {
  const [prodData, setProdData] = useState<Array<any>>([]);

  const handelGetProdData = async () => {
    try {
      const randomNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const result = await axios.get(
        `http://127.0.0.1:3000/product?cat=&sort=1&keyword=&page=${randomNumber(1, 2)}&limit=6`
      );

      if (result) {
        // console.info(result.data);
        setProdData(result.data.data);
      }
    } catch (error: any) {
      // console.info(error.response);
      toast(error.response.data);
    }
  };

  useEffect(() => {
    handelGetProdData();
  }, []);

  return (
    <div className="site-section">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="title-section text-center col-12">
            <h2 className="text-uppercase">Popular Products</h2>
          </div>
        </div>

        <div className="row">
          {prodData?.map((item: any,idx:number) => {
            return (
              <>
                <div className="col-sm-6 col-lg-4 text-center item mb-4 h-[auto]" key={idx}>
                  {/* <span className="tag">Sale</span> */}
                  <Link href={`/products/${item._id}`}>
                    <img
                      src={item.images[0]}
                      className="ms-7 h-[250px]"
                      alt={item.prodName}
                      width={"300px"}
                    />
                    {/* <img src={"images/product_01.png"} alt="Image" /> */}
                    <h3 className="text-dark mt-4 text-sm">
                      <span>{item.prodName}</span>
                    </h3>
                    <p className="price">
                      {/* <del>95.00</del> &mdash; $55.00 */}
                      Rs. {item.prodPrice}
                    </p>
                  </Link>
                </div>
              </>
            );
          })}

          {/* <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <img src="images/product_02.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">Chanca Piedra</a>
            </h3>
            <p className="price">$70.00</p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <img src="images/product_03.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">Umcka Cold Care</a>
            </h3>
            <p className="price">$120.00</p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <img src="images/product_04.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">Cetyl Pure</a>
            </h3>
            <p className="price">
              <del>45.00</del> &mdash; $20.00
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <img src="images/product_05.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">CLA Core</a>
            </h3>
            <p className="price">$38.00</p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <span className="tag">Sale</span>
            <a href="shop-single.html">
              <img src="images/product_06.png" alt="Image" />
            </a>
            <h3 className="text-dark">
              <a href="shop-single.html">Poo Pourri</a>
            </h3>
            <p className="price">
              <del>$89</del> &mdash; $38.00
            </p>
          </div> */}
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <Link href="/products" className="btn btn-primary px-4 py-3">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerProduct;
