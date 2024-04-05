"use client";
import NavBar from "@/components/vender-layout/NavBar";
import SideBar from "@/components/vender-layout/SideBar";
import Card from "@/components/vender-layout/dashboardComponent/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<any>();
  const tokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return config;
  };
  const getData = async () => {
    try {
      const config = tokenData();
      const result = await axios.get(
        "http://127.0.0.1:3000/user/dashData",
        config
      );
      setData(result.data.data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-6">
            <span className="font-semibold">Your Dashboard</span>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 gap-4">
            <Card title="Total Reveniew" link="/vender" count={12}/>
            <Card title="Users" link="/vender/users" count={data ? data.totalUser : null}/>
            <Card title="Total Product" link="/vender/product/all" count={data ? data.totalOurProduct : null} />
          </div>

          {/* Other Components */}
        </div>
      </div>
    </>
  );
};

export default page;
