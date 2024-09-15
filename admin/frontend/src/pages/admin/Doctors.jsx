/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <div className="justify-center space-y-3 items-center py-5 px-20 max-md:px-5">      
          <div className="grid grid-cols-3 gap-5 max-md:flex-col max-md:gap-0 ">
            {/* Doctor Card */}
            <div className="flex flex-col justify-center items-center py-5 w-full space-x-1 text-base text-black shadow-2xl bg-zinc-50 bg-opacity-90 max-md:mt-5 border-t-4 border-blue-500">
              <img loading="lazy" src="./public/admin.jpg" className="aspect-square w-[95px] rounded-4"/>
              <span className="mt-2.5 text-right">Dr Chui</span>
              <span className="mt-4 text-base text-right">Oncologist</span>
              <div className="self-stretch mt-4 text-center">Doctors are licensed health professionals who maintain and restore human health through the practice of medicine.</div>
              <div className="mt-4 text-center text-black mb-3">Monday - Friday 8:00AM - 6:00PM</div>
              <button className="flex w-fit justify-center mx-auto p-2 text-white bg-blue-500 rounded-lg my-1">Assign Task</button>
            </div>

            <div className="flex flex-col justify-center items-center py-5 w-full space-x-1 text-base text-black shadow-2xl bg-zinc-50 bg-opacity-90 max-md:mt-5 border-t-4 border-blue-500">
              <img loading="lazy" src="./public/admin.jpg" className="aspect-square w-[95px] rounded-4"/>
              <span className="mt-2.5 text-right">Dr Chui</span>
              <span className="mt-4 text-base text-right">Oncologist</span>
              <div className="self-stretch mt-4 text-center">Doctors are licensed health professionals who maintain and restore human health through the practice of medicine.</div>
              <div className="mt-4 text-center text-black mb-3">Monday - Friday 8:00AM - 6:00PM</div>
              <button className="flex w-fit justify-center mx-auto p-2 text-white bg-blue-500 rounded-lg my-1">Assign Task</button>
            </div>

            <div className="flex flex-col justify-center items-center py-5 w-full space-x-1 text-base text-black shadow-2xl bg-zinc-50 bg-opacity-90 max-md:mt-5 border-t-4 border-blue-500">
              <img loading="lazy" src="./public/admin.jpg" className="aspect-square w-[95px] rounded-4"/>
              <span className="mt-2.5 text-right">Dr Chui</span>
              <span className="mt-4 text-base text-right">Oncologist</span>
              <div className="self-stretch mt-4 text-center">Doctors are licensed health professionals who maintain and restore human health through the practice of medicine.</div>
              <div className="mt-4 text-center text-black mb-3">Monday - Friday 8:00AM - 6:00PM</div>
              <button className="flex w-fit justify-center mx-auto p-2 text-white bg-blue-500 rounded-lg my-1">Assign Task</button>
            </div>

            <div className="flex flex-col justify-center items-center py-5 w-full space-x-1 text-base text-black shadow-2xl bg-zinc-50 bg-opacity-90 max-md:mt-5 border-t-4 border-blue-500">
              <img loading="lazy" src="./public/admin.jpg" className="aspect-square w-[95px] rounded-4"/>
              <span className="mt-2.5 text-right">Dr Chui</span>
              <span className="mt-4 text-base text-right">Oncologist</span>
              <div className="self-stretch mt-4 text-center">Doctors are licensed health professionals who maintain and restore human health through the practice of medicine.</div>
              <div className="mt-4 text-center text-black mb-3">Monday - Friday 8:00AM - 6:00PM</div>
              <button className="flex w-fit justify-center mx-auto p-2 text-white bg-blue-500 rounded-lg my-1">Assign Task</button>
            </div>

            <div className="flex flex-col justify-center items-center py-5 w-full space-x-1 text-base text-black shadow-2xl bg-zinc-50 bg-opacity-90 max-md:mt-5 border-t-4 border-blue-500">
              <img loading="lazy" src="./public/admin.jpg" className="aspect-square w-[95px] rounded-4"/>
              <span className="mt-2.5 text-right">Dr Chui</span>
              <span className="mt-4 text-base text-right">Oncologist</span>
              <div className="self-stretch mt-4 text-center">Doctors are licensed health professionals who maintain and restore human health through the practice of medicine.</div>
              <div className="mt-4 text-center text-black mb-3">Monday - Friday 8:00AM - 6:00PM</div>
              <button className="flex w-fit justify-center mx-auto p-2 text-white bg-blue-500 rounded-lg my-1">Assign Task</button>
            </div>

            <div className="flex flex-col justify-center items-center py-5 w-full space-x-1 text-base text-black shadow-2xl bg-zinc-50 bg-opacity-90 max-md:mt-5 border-t-4 border-blue-500">
              <img loading="lazy" src="./public/admin.jpg" className="aspect-square w-[95px] rounded-4"/>
              <span className="mt-2.5 text-right">Dr Chui</span>
              <span className="mt-4 text-base text-right">Oncologist</span>
              <div className="self-stretch mt-4 text-center">Doctors are licensed health professionals who maintain and restore human health through the practice of medicine.</div>
              <div className="mt-4 text-center text-black mb-3">Monday - Friday 8:00AM - 6:00PM</div>
              <button className="flex w-fit justify-center mx-auto p-2 text-white bg-blue-500 rounded-lg my-1">Assign Task</button>
            </div>
          </div>

      {/* Previous Button */}
      <Link to='/'><button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 mb-8">Previous</button></Link>
    </div>
  );
};

export default Doctors;
