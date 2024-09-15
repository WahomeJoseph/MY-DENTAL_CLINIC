/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import {
  FaSun,
  FaMoon,
  FaAddressBook,
  FaUsers,
  FaNotesMedical,
} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiSignOutBold } from "react-icons/pi";
import DonutChart from "../DonutChart";
import InboxCard from "../Inbox";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleProfile = () => {
    setProfileMenu(!profileMenu);
  };

  return (
    <div
      className={`${darkMode ? "bg-bgColor text-white" : "bg-[#f0f8ff] text-black"
        } h-[100vh] flex`}
    >
      {/* Sidebar */}
      <div className="flex flex-col justify-between p-6 w-62 bg-blue-600 dark:bg-bgColor h-full">
        <div className="flex justify-between items-center mb-4">
          <Link to="/">
            <img src="./public/enamel.png" alt="Logo" className="h-16 w-16" />
          </Link>
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <FaSun className="text-white" />
            ) : (
              <FaMoon className="text-black" />
            )}
          </button>
        </div>

        <nav className="flex-grow space-y-6 px-2 mt-0 h-fit">
          <Link
            to="/appointments"
            className="flex items-center space-x-2 hover:text-[#f0f8ff] text-center p-2 hover:translate-x-2 shadow-xl"
          >
            <FaAddressBook />
            {!mobileMenu && <span>Appointments</span>}
          </Link>
          <Link
            to="/addPatients"
            className="flex items-center space-x-2 hover:text-[#f0f8ff] text-center p-2 hover:translate-x-2 shadow-xl"
          >
            <AiOutlineUsergroupAdd />
            {!mobileMenu && <span>Add Patients</span>}
          </Link>
          {/* <Link
            to="/viewPatients"
            className="flex items-center space-x-2 hover:text-[#f0f8ff] text-center p-2 hover:translate-x-2 shadow-xl"
          >
            <FaNotesMedical />
            {!mobileMenu && <span>Records</span>}
          </Link> */}
          <Link
            to="/doctors"
            className="flex items-center space-x-2 hover:text-[#f0f8ff] text-center p-2 hover:translate-x-2 shadow-xl"
          >
            <FaUsers />
            {!mobileMenu && <span>Doctors</span>}
          </Link>
          <Link
            to="/addDoctors"
            className="flex items-center space-x-2 hover:text-[#f0f8ff] text-center p-2 hover:translate-x-2 shadow-xl"
          >
            <AiOutlineUsergroupAdd />
            {!mobileMenu && <span>Add Doctors</span>}
          </Link>
          <Link
            to="/reports"
            className="flex items-center space-x-2 hover:text-[#f0f8ff] text-center p-2 hover:translate-x-2 shadow-xl"
          >
            <TbReportSearch />
            {!mobileMenu && <span>Reports</span>}
          </Link>
          {/* <Link to='/inbox' className='flex items-center space-x-2 hover:text-[#f0f8ff] text-center p-2 hover:translate-x-2 shadow-xl'>
            <MdOutlineMessage />{!mobileMenu && <span>Inbox</span>}
          </Link>           */}
        </nav>
        <Link
          to="/signOut"
          className="flex items-center space-x-2 hover:text-[#f0f8ff] text-center p-2 hover:translate-x-2 shadow-xl"
        >
          <PiSignOutBold />
          {!mobileMenu && <span>Sign Out</span>}
        </Link>
      </div>

      <div className="flex flex-col bg-[#f0f8ff] w-full rounded-t-lg">
        <nav className="flex items-center dark:bg-gray-900 px-4 py-2">
          <div className="max-w-screen-xl flex items-center w-full justify-between mx-8 p-4">
            <div className="flex-grow max-w-2xl w-full relative">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <CiSearch className="w-4 h-4 font-bold text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="search"
                  autoFocus="on"
                  autoComplete="off"
                  className="block w-full p-4 pl-10 text-sm text-black border border-gray-200 rounded-lg bg-gray-50  dark:bg-bgColor dark:border-[#f0f8ff] dark:placeholder-gray-400 dark:text-[#f0f8ff]"
                  placeholder="Search here ..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
            {/* User Profile */}
            <div className="relative flex items-center space-x-3">
              <img
                src="./public/admin.jpg"
                className="w-12 h-12 rounded-full cursor-pointer hover:opacity-80"
                onClick={toggleProfile}
              />
              {profileMenu && (
                <div className="z-100 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3">
                    <span className="block text-xl text-gray-900 dark:text-white">
                      Enamel Admin
                    </span>
                    <a href="#" className="block text-sm text-bgColor truncate dark:text-gray-400">
                      enameladmin01@gmail.com
                    </a>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="flex flex-col items-center w-full px-8 overflow-y-auto">
          <div className="flex flex-row gap-4 items-center justify-between py-6">
            {/* Doctors card */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <img className="w-full h-32" src="./public/doctors.png" alt="" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Doctors</h3>
                <span className="text-bgColor text-center text-base">78</span>
              </div>
              <div className="px-2 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #enamel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #dentist
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #smile
                </span>
              </div>
            </div>
            {/* Appointments card */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <img
                className="w-full h-32"
                src="./public/appointment.png"
                alt=""
              />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Appointments</h3>
                <span className="text-bgColor text-center text-base">316</span>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #enamel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #dentist
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #smile
                </span>
              </div>
            </div>
            {/* Treatments card */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <img className="w-full h-32" src="./public/medicine.png" alt="" />
              <div className="px-6 py-4 hover:scale-100 transition-transform duration-100">
                <h3 className="font-bold text-xl mb-2">Operations</h3>
                <span className="text-bgColor text-center text-base">137</span>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #enamel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #dentist
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #smile
                </span>
              </div>
            </div>
            {/* Finances card */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
              <img className="w-full h-32" src="./public/finances.png" alt="" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Finances</h3>
                <span className="text-bgColor text-center text-base">
                  $850k
                </span>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #enamel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #dentist
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #smile
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-8 justify-between">
            <DonutChart />
            <DonutChart />
            <DonutChart />
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
