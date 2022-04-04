import React, { Fragment } from "react";

import {
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 2410,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 4230,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 7260,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 5290,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 6010,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 6700,
      revenue: 61000,
    },
  ];

  return (
    <>
      <div className=" px-4 py-5">
        <div className="flex flex-col md:flex-row items-center h-full py-10 justify-around">
          <div className="">
            <h1 className="text-center text-2xl md:text-3xl pb-10 text-purple-500">
              Investment vs Revenue
            </h1>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 20, right: 10, left: 20, bottom: 2 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="investment" stroke="#8884d8" />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className="">
            <h1 className="text-center text-2xl md:text-3xl pb-10 text-orange-500">
              Investment vs Revenue vs Sell
            </h1>
            <BarChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" />
              <Bar dataKey="revenue" fill="#ffc658" />
              <Bar dataKey="investment" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center h-full py-10 justify-around">
          <div className="">
            <h1 className="text-center text-2xl md:text-3xl pb-10 text-green-500">
              Monthly Investments
            </h1>
            <PieChart width={500} height={300}>
              <Pie
                data={data}
                dataKey="investment"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="investment"
                nameKey="month"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </div>
          <div className="">
            <h1 className="text-center text-2xl md:text-3xl pb-10 text-teal-600">
              Sell vs Revenue
            </h1>
            <AreaChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 20, right: 10, left: 20, bottom: 2 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="sell"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
