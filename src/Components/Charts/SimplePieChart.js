import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data01 = [
  {
    month: "Mar",
    investment: 100000,
  },
  {
    month: "Apr",

    revenue: 24500,
  },
  {
    month: "May",

    revenue: 67010,
  },
  {
    month: "Jun",

    revenue: 40405,
  },
  {
    month: "Jul",

    revenue: 50900,
  },
  {
    month: "Aug",

    revenue: 61000,
  },
];
const data02 = [
  {
    month: "Mar",

    sell: 241,
  },
  {
    month: "Apr",

    sell: 423,
  },
  {
    month: "May",

    sell: 726,
  },
  {
    month: "Jun",

    sell: 529,
  },
  {
    month: "Jul",
    sell: 601,
  },
  {
    month: "Aug",
    sell: 670,
  },
];

const SimplePieChart = () => {
  return (
    
    <ResponsiveContainer width="100%"  aspect={2}>
      <PieChart width={400} height={400}>
        <Pie
          data={data01}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="sell"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
        <Tooltip></Tooltip>
      </PieChart>
    </ResponsiveContainer>
  );
};
export default SimplePieChart;
