/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ChartArea from '../../components/ChartArea';
import ChartBar from '../../components/ChartBar';
import ChartLine from '../../components/ChartLine';
import { Link } from 'react-router-dom';
// import ChartPyramid from '../../components/ChartPyramid';

const Reports = () => {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-5 text-left justify-center px-8 md:px-8 xl:px-10 py-2">
      <Link to='/'><img src="./public/enamel.png" alt="Logo" className='h-16 w-16' /></Link>
      <h1 className="text-black text-center mb-4 text-2xl font-bold">
        Enamel Dental Clinic Annual Reports
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">

        <GridItem title="Treatments and Operations">
          <ChartArea />
        </GridItem>

        <GridItem title="Finances and Expenditure">
          <ChartLine />
        </GridItem>
      </div>

      <div className="w-full max-w-[1400px]">
        <GridItem title="Number of patients">
          <ChartBar />
        </GridItem>
      </div>

      {/* <GridItem title="Gender-based visits">
          <ChartPyramid />
        </GridItem> */}
    </main>
  );
};

export default Reports;

function GridItem({title, children}) {
  return (
    <div className="flex flex-col items-center text-left justify-center bg-[#f0f8ff] shadow-2xl p-4 border-t-4 border-blue-600 h-[400px] rounded-t-lg">
      <h3 className="text-2xl font-semibold text-black text-left mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
