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
    <div className="container mx-auto space-y-4 px-2">
      <Toaster position='top-center'></Toaster>
      <h1 className="text-center text-2xl text-black mb-6">Patients Records</h1>
      <table className="min-w-full bg-white border border-[#f0f8ff] rounded-t-lg p-8">
        <thead>
          <tr className='text-black bg-[#f0f8ff] border-t-4 border-blue-500 rounded-t-xl shadow-xl'>
            <th className="px-4 py-2 w-fit">Full Name:</th>
            <th className="px-4 py-2 w-fit">Gender:</th>
            <th className="px-4 py-2 w-fit">Email:</th>
            <th className="px-4 py-2 w-fit">Age:</th>
            <th className="px-4 py-2 w-fit">IDNO:</th>
            <th className="px-4 py-2 w-fit">Phone:</th>
            <th className="px-4 py-2 w-fit">Address:</th>
            <th className="px-4 py-2 w-fit">Date:</th>
            <th className="px-4 py-2 w-fit">Time:</th>
            <th className="px-4 py-2 w-fit">Service:</th>
            <th className="px-4 py-2 w-fit">Payment:</th>
            <th className="px-4 py-2 w-fit">Actions:</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={appointment._id} className={`border-b-2 ${index % 2 === 0 ? 'bg-white' : 'bg-white'} hover:bg-[#f0f8ff] transition-all duration-200`}>
              <td className="px-4 py-2">{appointment.fname}</td>
              <td className="px-4 py-2">{appointment.gender}</td>
              <td className="px-4 py-2">{appointment.age}</td>
              <td className="px-4 py-2">{appointment.IDNO}</td>
              <td className="px-4 py-2">{appointment.email}</td>
              <td className="px-4 py-2">{appointment.phone}</td>
              <td className="px-4 py-2">{appointment.address}</td>
              <td className="px-4 py-2">{appointment.date}</td>
              <td className="px-4 py-2">{appointment.time}</td>
              <td className="px-4 py-2">{appointment.service}</td>
              <td className="px-4 py-2">{appointment.payment}</td>
              <td className="flex flex-row items-center space-x-4 px-4 py-2">
                <FaTrashCan className="text-red-500 text-xl cursor-pointer w-full" onClick={() => deleteAppointment(appointment._id)} />
                <CiEdit className="text-green-500 text-xl cursor-pointer w-full" onClick={() => updateAppointment(appointment._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  );
};

export default Appointments;
