"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonthChart = () => {
  const [val, setVal] = useState<any>([]);
  let data;
  let option = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Monthly In-House Salse",
      },
    },
  };

  const getValue = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await axios.get(
        "http://127.0.0.1:3000/order/MonthChartDate",
        config
      );
      if (response) {
        setVal(response.data);
      }
    } catch (error: any) {
      console.info(error.response);
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  data = {
    labels: val?.map((item: any) => {
      return item._id;
    }),
    datasets: [
      {
        label: "Monthly Salse",
        data: val?.map((item: any) => {
          return item.monthlyTotal;
        }),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(153, 102, 255, 1)"],
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className=" mt-4">
      <div className="p-6 bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-800">
        <Bar options={option as any} data={data} />
      </div>
    </div>
  );
};

export default MonthChart;
