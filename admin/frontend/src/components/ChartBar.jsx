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
const patientsData = [
  {
    name: 'Jan',
    patients: 400,
    new_patients: 240,
  },
  {
    name: 'Feb',
    patients: 300,
    new_patients: 139,
  },
  {
    name: 'Mar',
    patients: 980,
    new_patients: 200,
  },
  {
    name: 'Apr',
    patients: 390,
    new_patients: 278,
  },
  {
    name: 'May',
    patients: 480,
    new_patients: 189,
  },
  {
    name: 'Jun',
    patients: 380,
    new_patients: 239,
  },
];

const ChartBar = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={patientsData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="patients" fill="#2563eb" />
        <Bar dataKey="new_patients" fill="#08003a" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartBar;
const CustomTooltip = ({active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-blue-600 flex flex-col gap-2 rounded-md shadow-xl">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-[#f0f8ff]">
          Patients:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-[#f0f8ff]">
          New Patients:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};
