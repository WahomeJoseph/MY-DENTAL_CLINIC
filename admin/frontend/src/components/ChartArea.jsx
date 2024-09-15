/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
'use client'
import React from "react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const clinicData = [
  {
    name: 'Jan',
    treatments: 400,
    operations: 240,
  },
  {
    name: 'Feb',
    treatments: 300,
    operations: 221,
  },
  {
    name: 'Mar',
    treatments: 200,
    operations: 229,
  },
  {
    name: 'Apr',
    treatments: 278,
    operations: 200,
  },
  {
    name: 'May',
    treatments: 189,
    operations: 211,
  },
  {
    name: 'Jun',
    treatments: 239,
    operations: 250,
  },
];

const ChartArea = ()=>{    
    return(
        <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={400} data={clinicData} margin={{ right: 30 }}>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Area type="monotone" dataKey="treatments" stroke="#2563eb" fill="#3b82f6" stackId="1"/>
        <Area type="monotone" dataKey="operations" stroke="#08003a" fill="#08003a" stackId="1"/>
      </AreaChart>
    </ResponsiveContainer>
    )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-blue-600 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-[#f0f8ff]">
          Treatments:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-[#f0f8ff]">
          Operations:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default ChartArea