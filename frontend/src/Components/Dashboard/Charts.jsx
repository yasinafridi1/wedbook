import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { ChartData } from "../Data/LineChartData";
const Charts = ({width,height}) => {

  return (
    <>
      <LineChart width={width} height={height} data={ChartData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip bottom />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
      </LineChart>
    </>
  );
};

export default Charts;
