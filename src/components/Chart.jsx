import React from "react";
import { Line } from "react-chartjs-2";
import GraphData from "../data.json";

const data = {
  labels: GraphData.result.labels,
  datasets: [
    {
      label: "# of Votes",
      data: GraphData.result.fulfillment.data,
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chart = () => <Line data={data} options={options} />;

export default Chart;
