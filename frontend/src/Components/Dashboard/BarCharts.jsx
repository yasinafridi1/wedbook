import React from "react";
import { BarChartData } from "../Data/BarChartData";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Brush,
} from "recharts";
const BarCharts = ({ width, height }) => {
  return (
    <>
      <BarChart width={width} height={height} data={BarChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Brush dataKey="name" height={30} stroke="#82ca9d" />
        <Bar dataKey="Order" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default BarCharts;
