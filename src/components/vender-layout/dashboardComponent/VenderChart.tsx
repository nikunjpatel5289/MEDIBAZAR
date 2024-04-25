// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import { Bar, Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip
// );

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
import { Bar } from "react-chartjs-2";

interface prop {
  val: [any];
}

const VenderChart = ({ val }: prop) => {
  let option = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Monthly Salse chart",
      },
    },
  };

  let data = {
    labels: val?.map((item: any) => {
      return item._id;
    }),
    datasets: [
      {
        label: "Monthly Salse",
        data: val?.map((item: any) => {
          return item.monthlyTotal;
        }),
        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(153, 102, 255, 1)"],
        borderWidth: 3,
      },
    ],
  };

  //   const data = {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [
  //       {
  //         label: "Monthly Salse",
  //         data: [12, 19, 3, 5, 2, 3],
  //         //   backgroundColor: [
  //         //     "rgba(255, 99, 132, 0.2)",
  //         //     "rgba(54, 162, 235, 0.2)",
  //         //     "rgba(255, 206, 86, 0.2)",
  //         //     "rgba(75, 192, 192, 0.2)",
  //         //     "rgba(153, 102, 255, 0.2)",
  //         //     "rgba(255, 159, 64, 0.2)",
  //         //   ],
  //         borderColor: [
  //           // "rgba(255, 99, 132, 1)",
  //           // "rgba(54, 162, 235, 1)",
  //           // "rgba(255, 206, 86, 1)",
  //           // "rgba(75, 192, 192, 1)",
  //           // "rgba(153, 102, 255, 1)",
  //           "rgba(255, 159, 64, 1)",
  //         ],
  //         borderWidth: 3,
  //       },
  //     ],
  //   };

  return (
    <div className=" mt-4">
      <div className="p-6 bg-white border-2 border-gray-200 rounded-lg shadow-2xl dark:bg-gray-200 dark:border-gray-800">
        <Bar options={option as any} data={data} />
      </div>
    </div>
  );
};

export default VenderChart;
