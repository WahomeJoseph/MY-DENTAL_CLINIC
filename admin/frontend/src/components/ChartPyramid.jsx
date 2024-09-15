/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
const visitorsData = [
  {month: 'Jan', male: 300, female: 200},
  {month: 'Feb', male: 250, female: 220},
  {month: 'Mar', male: 280, female: 340},
  {month: 'Apr', male: 300, female: 260},
  {month: 'May', male: 390, female: 280},
  {month: 'Jul', male: 350, female: 300},
  {month: 'Aug', male: 260, female: 120},
  {month: 'Sep', male: 350, female: 54},
  {month: 'Oct', male: 400, female: 30},
];

const ChartPyramid = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={300}
        // layout="horizontal"
        data={visitorsData}
        margin={{right: 30}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="male" fill="#3b82f6" />
        <Bar dataKey="female" fill="#08003a" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartPyramid;

const CustomTooltip = ({active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-blue-600 flex flex-col gap-2 rounded-md shadow-xl">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-[#f0f8ff]">
          Male:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-[#f0f8ff]">
          Female:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};
