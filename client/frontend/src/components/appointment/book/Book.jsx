/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Toaster} from 'react-hot-toast';
import './Book.css';
import Manage from '../../appointment/Manage';
import axiosInstance from '../../TokenExpire';
import {Link, useNavigate} from 'react-router-dom';
import emailjs from '@emailjs/browser'

const Book = () => {  
  const [formData, setFormData] = useState ({
    fname: '',
    gender: 'Not set',
    age: '',
    IDNO: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    service: 'Not set',
    payment: 'Not set',
  });
  const country = [
    {code: '+234'},
    {code: '+254'},
    {code: '+27'},
    {code: '+20'},
    {code: '+251'},
    {code: '+212'},
    {code: '+44'},
    {code: '+91'},
    {code: '+81'},
    {code: '+49'},
    {code: '+33'},
    {code: '+55'},
    {code: '+54'},
    {code: '+57'},
    {code: '+51'},
  ];

  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate ();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:8080/patient/getAppointments')
        if (!response.ok) {
          console.log("Response not ok!");
          return;
        }
          console.log("Response ok");
          const data = await response.json()
          console.log("Fetched Data:",data)
        
        if (Array.isArray(data)) {
          const filteredData = data
          .filter((x) => x.fname !== 'Shie')
          .map(({time, date, service}) => ({time, date, service}))
          console.log(filteredData)
          setAppointments(filteredData) //Update the state with the filtered data
        } else{
          console.log("Array expected!", data)
        }      
      } catch (error) {
        console.log("Error fetching the appointment!, error")
      }            
    }

    fetchAppointments()
  }, [])

  const handleChange = e => {
    setFormData ({...formData, [e.target.name]: e.target.value});
  };
  // Function for a successful appointment booking
  const handleBook = async e => {
    setLoading(true)

    const {fname,gender,age,IDNO,email,phone,address,date,time,service,payment} = formData;

    if (!fname) {
      return toast.error ('First name cannot be empty!');
    }
    if (!gender) {
      return toast.error ('Gender cannot be empty!');
    }
    if (!age) {
      return toast.error ('Age cannot be empty!');
    }
    if (!IDNO) {
      return toast.error ('ID NO cannot be empty!');
    }
    if (!email) {
      return toast.error ('Email cannot be empty!');
    }
    if (!phone) {
      return toast.error ('Phone cannot be empty!');
    }
    if (!address) {
      return toast.error ('Address cannot be empty!');
    }
    if (!date) {
      return toast.error ('Date cannot be empty!');
    }
    if (!time) {
      return toast.error ('Time cannot be empty!');
    }
    if (!service) {
      return toast.error ('Service cannot be empty!');
    }
    if (!payment) {
      return toast.error ('Payment cannot be empty');
    }
    try {
      const response = await axiosInstance.post ('http://localhost:2700/book', {
        fname,
        gender,
        email,
        age,
        IDNO,
        phone,
        address,
        date,
        time,
        service,
        payment,
      });

      if (!response.ok) {
        toast.error("Response failed")
      }else{

        console.log (response);

      if (!response.data.message === 'Appointment successfully booked!') {
        // Send email notification
        toast.error(data.message);
        
      }else{

        await emailjs.sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          form.current, {
            publicKey: process.env.PUBLIC_KEY
          }
        )
        toast.success('Appointment successfully booked and notification sent!')
        return navigate ('/pay');
      }
        
      }
      
    } catch (error) {
      toast.error ('Internal server error!');
      return;
    } finally{
      setLoading(false)
    }
  };

  const handleManage = () => {
    setSelectedAppointmentId(null)
    // fetchAppointments()
  }

  return (
    <div className="book flex flex-col p-6  mt-12" id="book">
      <Toaster position="top-center" />
      <h2 className="text-2xl font-bold mb-0 text-center">
        Book Your Appointment
      </h2>
      <form className="form grid grid-cols-2 border-t-4 border-[#08003a] mt-3 rounded-lg px-14 py-12 gap-6 shadow-2xl mx-8">
        <div className="form-group">
          <label htmlFor="first-name" className="block mb-1">
            Full Name:<span className="text-red-600">*</span>
          </label>
          <input
            type="name"
            name="fname"
            value={formData.fname}
            autoComplete="off"
            autoSave="off"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender" className="block mb-1">
            Gender:<span className="text-red-600">*</span>
          </label>
          <select
            name="gender"
            id="gender"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.gender}
            autoComplete="off"
            autoSave="off"
            onChange={handleChange}
          >
            <option value="Not set">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age" className="block mb-1">
            Age:<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="age"
            value={formData.age}
            autoComplete="off"
            autoSave="off"
            placeholder="Enter your age"
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="IDNO" className="block mb-1">
            ID Number:<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="IDNO"
            value={formData.IDNO}
            autoComplete="off"
            autoSave="off"
            placeholder="Enter your ID number"
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name" className="block mb-1">
            Email:<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            autoComplete="off"
            autoSave="off"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="block mb-1">
            Phone Number:<span className="text-red-600">*</span>
          </label>
          <div className="flex">
            <select name="phone" id="phone" autoComplete="off" autoSave="off">
              {country.map (country => (
                <option key={country.code} value={country.code}>
                  {`${country.code}`}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              autoComplete="off"
              autoSave="off"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border rounded-md"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address" className="block mb-1">
            Address:<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            autoComplete="off"
            autoSave="off"
            placeholder="Enter your address"
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date" className="block mb-1">
            Date:<span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            autoComplete="off"
            autoSave="off"
            placeholder="Select your date"
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time" className="block mb-1">
            Time:<span className="text-red-600">*</span>
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            autoComplete="off"
            autoSave="off"
            placeholder="Preferred time for visitation"
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="service" className="block mb-1">
            Choose Service: <span className="text-red-600">*</span>
          </label>
          <select
            name="service"
            id="service"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.service}
            autoComplete="off"
            autoSave="off"
            onChange={handleChange}
          >
            <option value="Not set" className="black text-xs">Service</option>
            <option value="Orthodontics" className="black text-xs text-black">
              Orthodontics
            </option>
            <option value="Canal Filling" className="black text-xs text-black">
              Canal Filling
            </option>
            <option
              value="Tooth Extraction"
              className="black text-xs text-black"
            >
              Tooth Extraction
            </option>
            <option
              value="Teeth Whitening"
              className="black text-xs text-black"
            >
              Teeth Whitening
            </option>
          </select>
        </div>

        <div className="form-group shadow-md">
          <label htmlFor="payment" className="block mb-1">
            Mode of Payment: <span className="text-red-600">*</span>
          </label>
          <select
            name="payment"
            id="payment"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.payment}
            autoComplete="off"
            autoSave="off"
            onChange={handleChange}
          >
            <option value="Not set" className="black text-xs">Pay with</option>
            <option value="mpesa" className="black text-xs text-black">
              M-Pesa
            </option>
            <option value="paypal" className="black text-xs text-black">
              Pay Pal
            </option>
            <option value="bank" className="black text-xs text-black">
              Bank
            </option>
          </select>
        </div>
      </form>

      <div className="flex justify-end gap-3 mt-2">
        <Link to='/manage' className="btn flex justify-end bg-bgColor text-white py-4 px-12 w-fit hover:bg-bgColor">Manage</Link>
        <button className="btn flex justify-end bg-bgColor text-white py-4 px-12 w-fit hover:bg-bgColor" onClick={handleBook}>Checkout</button>
      </div>

{/* View Appointments */}
      <div className="p-4 mt-8">
        <h2 className="text-2xl mb-4">My Appointments</h2>
        <ul>
          {appointments.length > 0 ? (
           appointments.map((appointment, index) => (
            <li key={index} className="mb-4 border-b pb-4">
              <p><strong>Service:</strong> {appointment.service}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <button onClick={() => setSelectedAppointmentId(appointment._id)}
                className="bg-bgColor text-white px-4 py-2 rounded mt-2">Manage
              </button>
            </li>
          ))
          ):(
            <span className='text-2xl text-red-600'>No appointments displayed</span>
          )}
        </ul>
        {selectedAppointmentId && (
          <Manage appointmentId={selectedAppointmentId} onManageComplete={handleManage} />
        )}
      </div>
    </div>
  );
};

export default Book;
