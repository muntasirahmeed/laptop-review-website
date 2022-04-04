import * as React from "react";
import { LineChart, Line, XAxis,  Legend, Tooltip, YAxis } from "recharts";

const data = [
  {
    month: "Mar",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "Apr",
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: "Jul",
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: "Aug",
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
];

const SimpleLineChart = () => {
  return (
    <LineChart width={400} height={250} data={data}>
      <XAxis dataKey="month" interval="preserveStartEnd"></XAxis>
      <Legend></Legend>
      <Tooltip></Tooltip>
      <YAxis interval="preserveStartEnd"></YAxis>
      <Line
        type="monotone"
        dataKey="revenue"
        stroke="#8884d8"
        strokeWidth={4}
      />
      <Line
        type="monotone"
        dataKey="investment"
        stroke="#82ca9d"
        strokeWidth={4}
      />
    </LineChart>
  );
};
export default SimpleLineChart;
