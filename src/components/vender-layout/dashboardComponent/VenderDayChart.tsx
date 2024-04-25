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

interface prop {
  val: [any];
}

const VenderDayChart = ({ val }: prop) => {
  // console.info(val)
  let options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  let data = {
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
      <div className="p-6 bg-white border-2 border-gray-200 rounded-lg shadow-2xl dark:bg-gray-200 dark:border-gray-800">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default VenderDayChart;
