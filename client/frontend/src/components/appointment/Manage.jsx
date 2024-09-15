/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const Manage = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [newService, setNewService] = useState('')
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [message, setMessage] = useState('');

  const handleReschedule = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/reschedule/${appointmentId}`, {
        date: newDate,
        time: newTime,
        service: newService
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleCancel = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/cancel/${appointmentId}`);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="relative left-0 right-0 bottom-20 top-6 mx-10 my-4 p-6">
      <h2 className="text-2xl text-center font-bold mb-3">Manage Appointment</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Appointment ID:</label>
        <input
          type="text"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
          placeholder='Enter your appointment ID'
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">New Service:</label>
        <input
          type="text"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          placeholder='Enter a new service'
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">New Date:</label>
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">New Time:</label>
        <input
          type="time"
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="flex space-x-4">
        <button onClick={handleReschedule} className="bg-blue-500 text-white px-4 py-2 rounded">
          Reschedule
        </button>
        <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
      {message && <div className="mt-4 text-red-500">{message}</div>}
    </div>
  );
};

export default Manage;
