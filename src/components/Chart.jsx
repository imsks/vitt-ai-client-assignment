import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ graphData }) => {
  console.log("Data coming from Server", graphData);

  const { data, options } = graphData;

  return <Line data={data} options={options} />;
};

export default Chart;
