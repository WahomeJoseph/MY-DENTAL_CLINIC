/* eslint-disable no-unused-vars */
import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  const chartOptions = {
    series: [24, 78, 62],
    colors: ['#1C64F2', '#16BDCA', '#FDBA8C'],
    chart: {
      height: 320,
      width: '100%',
      type: 'donut',
    },
    stroke: {
      colors: ['transparent'],
      lineCap: '',
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: 'Esteemed visitors',
              fontFamily: 'Inter, sans-serif',
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce ((a, b) => a + b, 0);
                return sum;
              },
            },
            value: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: -20,
              formatter: function (value) {
                return value;
              },
            },
          },
          size: '80%',
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: ['Male', 'Female', 'Children'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
      fontFamily: 'Inter, sans-serif',
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value;
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value;
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };

  return (
    <Chart
      options={chartOptions}
      series={chartOptions.series}
      type="donut"
      height={320}
    />
  );
};

export default DonutChart;
