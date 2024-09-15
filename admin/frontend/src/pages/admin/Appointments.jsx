/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { FaTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

const Appointments = () => {  
  const [appointments, setAppointments] = useState ([]);
  const [loading, setLoading] = useState(true)
    
  useEffect (() => {  
  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`http://localhost:2700/appointments`);
      console.log(response);
      setAppointments(response.data);
    } catch (error) {
      toast.error ('Error fetching the appointments!');
    }
    finally{
      setLoading(false)
    }
  };
  fetchAppointments ();
}, []);

if (loading) {
  return <div className='text-center text-2xl'>Loading...</div>
}

  // Delete an Appointment
  const deleteAppointment = async id => {
    try {
      await axios.delete (`http://localhost:2700/delete/${id}`);
    } catch (error) {
      console.error ('Error deleting appointment:', error);
    }
  };
  // Update an Appointment
  const updateAppointment = async id => {
    const updatedData = {};
    try {
      await axios.put (`http://localhost:2700/update/${id}`, updatedData);
    } catch (error) {
      console.error ('Error updating appointment:', error);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md px-4 sm:rounded-lg">
      <Toaster position='top-center'></Toaster>
      <h1 className="text-center text-2xl font-bold text-black mb-6">Patients Appointments</h1>
      <table className="w-full text-sm text-bgColor text-left rtl:text-right dark:text-[#f0f8ff] bg-bgColor border border-[#f0f8ff] rounded-t-lg p-8">
        <thead className='text-xs text-[#f0f8ff] uppercase bg-bgColor'>
          <tr className='text-black bg-[#f0f8ff] border-t-4 border-blue-500 rounded-t-2xl shadow-md'>
            <th scope="col" className="px-4 py-2 w-fit">Full Name:</th>
            <th scope="col" className="px-4 py-2 w-fit">Gender:</th>
            <th scope="col" className="px-4 py-2 w-fit">Email:</th>
            <th scope="col" className="px-4 py-2 w-fit">Age:</th>
            <th scope="col" className="px-4 py-2 w-fit">IDNO:</th>
            <th scope="col" className="px-4 py-2 w-fit">Phone:</th>
            <th scope="col" className="px-4 py-2 w-fit">Address:</th>
            <th scope="col" className="px-4 py-2 w-fit">Date:</th>
            <th scope="col" className="px-4 py-2 w-fit">Time:</th>
            <th scope="col" className="px-4 py-2 w-fit">Service:</th>
            <th scope="col" className="px-4 py-2 w-fit">Payment:</th>
            <th scope="col" className="px-4 py-2 w-fit">Actions:</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={appointment._id} className={`border-b-2 border-r-2 ${index % 2 === 0 ? 'bg-white' : 'bg-white'} hover:bg-[#f0f8ff] transition-all duration-200`}>
              <td className="w-4 p-4">{appointment.fname}</td>
              <td className="w-4 p-4">{appointment.gender}</td>
              <td className="w-4 p-4">{appointment.email}</td>
              <td className="w-4 p-4">{appointment.age}</td>
              <td className="w-4 p-4">{appointment.IDNO}</td>
              <td className="w-4 p-4">{appointment.phone}</td>
              <td className="w-4 p-4">{appointment.address}</td>
              <td className="w-4 p-4">{appointment.date}</td>
              <td className="w-4 p-4">{appointment.time}</td>
              <td className="w-4 p-4">{appointment.service}</td>
              <td className="w-4 p-4">{appointment.payment}</td>
              <td className="flex my-4 space-x-4 px-6 py-4">
                <FaTrashCan className="text-red-500 text-xl cursor-pointer w-full" onClick={() => deleteAppointment(appointment._id)} />
                <CiEdit className="text-green-500 text-xl cursor-pointer w-full" onClick={() => updateAppointment(appointment._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 mb-6" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-bgColor dark:text-[#f0f8ff]">1-10</span> of <span className="font-semibold text-bgColor dark:text-white">50</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
    </div>  );
};

export default Appointments;
