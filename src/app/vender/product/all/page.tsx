import NavBar from "@/components/vender-layout/NavBar";
import SideBar from "@/components/vender-layout/SideBar";
import AllProduct from "@/components/vender-layout/productComponent/AllProduct";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-4">
            <span className="font-semibold">All Products</span>
          </div>
        </div>
        <AllProduct />
      </div>
    </>
  );
};

export default page;
