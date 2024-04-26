"use client";
import NavBar from "@/components/admin-layout/NavBar";
import SideBar from "@/components/admin-layout/SideBar";
import AddCategories from "@/components/admin-layout/categoriesComponents/AddCategories";
import AllCategories from "@/components/admin-layout/categoriesComponents/AllCategories";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const page = () => {
  const [catData, setCatData] = useState<any>();

  const getTokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return config;
  };

  const getCategoryData = async () => {
    try {
      const config = getTokenData();
      const result = await axios.get("http://127.0.0.1:3000/category", config);

      if (result) {
        // console.info(result.data.data);
        setCatData(result.data.data);
      }
    } catch (error: any) {
      toast.warn(error.response.data)
      // console.info(error.response.data);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const handeRemoveCategory = async (id: string) => {
    try {
      const config = getTokenData()
      const response = await axios.delete(`http://127.0.0.1:3000/category/${id}`, config)
      
      if(response.data.status) {
        toast.success("Category Removed....")
        getCategoryData()
      }

    } catch (error : any) {
      toast.warn(error.response.data.message)
    }
  }

  return (
    <>
      <ToastContainer />
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-4">
            <span className="font-semibold">Add Categories</span>
          </div>
        </div>
        <AddCategories getCategoryData={getCategoryData} getTokenData={getTokenData} toast={toast.success}/>
        {/* <hr /> */}
        <AllCategories catData={catData} removeCategory={handeRemoveCategory}/>
      </div>
    </>
  );
};

export default page;
