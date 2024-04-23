"use client";
import NavBar from "@/components/vender-layout/NavBar";
import SideBar from "@/components/vender-layout/SideBar";
import Card from "@/components/vender-layout/dashboardComponent/Card";
import VenderChart from "@/components/vender-layout/dashboardComponent/VenderChart";
import VenderDayChart from "@/components/vender-layout/dashboardComponent/VenderDayChart";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<any>([]);
  const [orderTotal, setOrderToala] = useState<any>([]);
  const [salseData, setSalseData] = useState<any>([]);
  const [dayChart, setDayChart] = useState<any>([]);

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

      const OTOTAL = await axios.get(
        "http://127.0.0.1:3000/order/dashboardOrderTotal",
        config
      );

      const CHARTDATA = await axios.get(
        "http://127.0.0.1:3000/order/MonthChartDate",
        config
      );

      const DAYSELL = await axios.get(
        "http://127.0.0.1:3000/order/daySellingChart",
        config
      );
      // console.info(result.data.data['totalOurProduct']);
      // console.info(OTOTAL.data.total);

      setData(result.data.data);
      setOrderToala(OTOTAL.data);
      setSalseData(CHARTDATA.data);
      setDayChart(DAYSELL.data[0].dailyTotals)
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
            <span className="font-semibold">Dashboard</span>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 gap-4">
            {/* <Card title="Total Reveniew" link="/vender" count={12} /> */}
            <Card
              title="Total Product"
              count={data ? data.totalOurProduct : null}
              link="/vender/product/all"
            />
            <Card
              title="Users"
              link="/vender/users"
              count={data ? data.totalUser : null}
            />

            <Card
              title="Total Sales"
              count={orderTotal.total >= 0 ? `Rs. ${orderTotal.total}` : null}
              link="/vender/order"
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <VenderChart val={salseData}/>
            <VenderDayChart val={dayChart}/>
          </div>
          {/* Other Components */}
        </div>
      </div>
    </>
  );
};

export default page;
