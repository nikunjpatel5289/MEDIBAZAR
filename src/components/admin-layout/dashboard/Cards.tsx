"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Cards = () => {
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
  const dashDetail = async () => {
    try {
      const config = tokenData();
      const result = await axios.get(
        "http://127.0.0.1:3000/user/dashData",
        config
      );

      setData(result.data.data);
    } catch (error: any) {
      console.info(error.response.data);
    }
  };

  useEffect(() => {
    dashDetail();
  }, []);

  return (
    <>
      <Card
        title="Total User's"
        totalCount={data ? data.totalUser : null}
        link="/admin/users"
      />
      <Card
        title="Total Venders"
        totalCount={data ? data.totalVender : null}
        extraTitle="Total Active Vender"
        extraTotalCount={data ? data.totalActiveVender : null}
        link="/admin/venders"
      />
      <Card
        title="Total Product's"
        totalCount={data ? data.totalOurProduct : null}
        link="/admin/products/all"
      />
    </>
  );
};

export default Cards;
