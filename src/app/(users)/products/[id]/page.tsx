"use client";
import Carosol from "@/components/ExtraComponent/Carosol";
import Footer from "@/components/user-layout/Footer";
import Header from "@/components/user-layout/Header";
import ProductPreviewDescription from "@/components/user-layout/productComponent/ProductPreviewDescription";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [val, setVal] = useState(1);
  const handleINC = () => setVal(val + 1);
  const handleDEC = () => setVal(val > 1 ? val - 1 : val);

  const images = [
    { src: "../images/product_05.png", alt: "" },
    { src: "../images/product_06.png", alt: "" },
    { src: "../images/product_04.png", alt: "" },
  ];

  return (
    <>
      <Header />
      {/* below Classs => site-section */}
      <div className="mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mr-auto">
              <div className="border text-center">
                <Carosol images={images} />
                {/* <img
                  src="../images/product_07_large.png"
                  alt="Image"
                  height={"50%"}
                  className="img-fluid p-5"
                /> */}
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
              <div className="mt-4 flex items-center border border-gray-300 rounded overflow-hidden w-40">
                <button className="px-3 py-2 bg-gray-200" onClick={handleDEC}>
                  -
                </button>
                <input
                  type="text"
                  className="text-center w-full bg-gray-100 text-black"
                  value={val}
                  disabled
                />
                <button
                  className="px-3 py-2 text-xl bg-gray-200"
                  onClick={handleINC}
                >
                  +
                </button>
              </div>
              <div className="mt-4">
                <button className="inline-block px-4 py-3 btn-primary">
                  Add To Cart
                </button>
              </div>
              <ProductPreviewDescription />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mr-auto">
              <div className="border text-center">
                <Carosol images={images} />
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
                  <button className="px-3 py-2 bg-gray-200" onClick={handleDEC}>
                    -
                  </button>
                  <input
                    type="text"
                    className="text-center w-full bg-gray-100 text-black"
                    value={val}
                    disabled
                  />
                  <button
                    className="px-3 py-2 text-xl bg-gray-200"
                    onClick={handleINC}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <button className="inline-block px-4 py-3 btn-primary">
                  Add To Cart
                </button>
              </div>
              <ProductPreviewDescription />
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default page;
