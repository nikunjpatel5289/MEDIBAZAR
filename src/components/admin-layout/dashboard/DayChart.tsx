"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const DayChart = () => {
  const [val, setVal] = useState<any>([]);

  let data;
  let options = {
    scales: {
      y: {
        beginAtZero: true,
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
        "http://127.0.0.1:3000/order/daySellingChart",
        config
      );
      if (response) {
        // console.info(
        //   response.data[0].dailyTotals.map((item: any) => item.total)
        // );
        setVal(response.data[0].dailyTotals);
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
      return item.day;
    }),
    datasets: [
      {
        label: "Day Selling",
        data: val?.map((item: any) => {
          return item.total;
        }),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className=" mt-4">
      <div className="p-6 bg-white border-4 border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-800">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DayChart;
