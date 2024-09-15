/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import {Toaster} from 'react-hot-toast'
import axios from 'axios'

const AddDoctors = () => {  
  
  const [formData, setFormData] = useState({
    fname:'',
    age:'',
    gender:'Gender',
    email:'',
    phone:'',
    address:'',
    specialty: '',
  })

  const navigate = useNavigate();
  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

    const handleRecord = async (e) => {
      const {fname,age,gender,email,phone,address,specialty} = formData;
      if (!fname) {
        return toast.error('Name cannot be empty!');
      }
      if (!age) {
        return toast.error('Age cannot be empty!');
      }                
      if (!gender) {
        return toast.error('Gender cannot be empty!');
      }  
      if (!email) {
        return toast.error('Email cannot be empty!');
      }      
      if (!phone) {
        return toast.error('Phone cannot be empty!');
      }      
      if (!address) {
        return toast.error('Address cannot be empty!');
      }
      if (!specialty) {
        return toast.error('Specialty cannot be empty!');
      }     

      try {
        const response = await axios.post('http://localhost:8081/patient', {fname,age,gender,email,phone,address,specialty})
        console.log(response)

        if (response.data.message === 'Doctor records successful!') {
          return navigate('/')
        }
      } catch (error) {
        toast.error('Internal server error!')
      }
  }

  return (
    <div>
      <Toaster position='top-center'></Toaster>
      <div className='flex flex-row w-full justify-center h-[75px] p-auto bg-[#f0f8ff]'>
      <Link to='/'><img src="./public/enamel.png" alt="" className='w-16 h-16 ml-10 my-2 bg-cover'/></Link>
        <h1 className='text-2xl text-center font-bold text-black m-auto '>Doctor Registration Form</h1>
      </div>

      <h2 className='relative text-left text-2xl text-bold text-black my-4 mx-8 hover:underline underline-blue'>Personal Information</h2>
      <div className='grid grid-cols-2 md:grid-cols-2 gap-6 border-t-4 border-blue-600 dark:bg-bgColor p-8 rounded-t-lg shadow-xl mx-8'>
        {/* Personal Information */}
        <div>
          <label className='block text-sm font-medium mb-1'>Full Name:</label>
          <input type="name" name='fname' value={formData.fname} autoComplete='off' autoSave='off' placeholder='eg. John Doe' onChange={handleInput} className='w-full p-2 border rounded-md dark:bg-gray-200 dark:text-white shadow-lg' required />
        </div>        
        <div>
          <label className='block text-sm font-medium mb-1'>Age:</label>
          <input type="age" name='age' value={formData.age} autoComplete='off' autoSave='off' placeholder='e.g. 31' onChange={handleInput} className='w-full p-2 border rounded-md dark:bg-gray-200 dark:text-white shadow-lg' required />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Gender:</label>
          <select name='gender' id='gender' value={formData.gender} autoComplete='off' autoSave='off' onChange={handleInput} className='w-full p-2 border rounded-md dark:bg-gray-200 dark:text-white shadow-lg'>
            <option value='Gender'>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Email:</label>
          <input type="email" name='email' value={formData.email} autoComplete='off' autoSave='off' placeholder='e.g. doctor01@gmail.com' onChange={handleInput} className='w-full p-2 border rounded-md dark:bg-gray-200 dark:text-white shadow-lg' required />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Phone Number:</label>
          <input type="tel" name='phone' value={formData.phone} autoComplete='off' autoSave='off' placeholder='e.g. 0712345678' onChange={handleInput} className='w-full p-2 border rounded-md dark:bg-gray-200 dark:text-white shadow-lg' required />
        </div>
        <div className='md:col-span-2'>
          <label className='block text-sm font-medium mb-1'>Address:</label>
          <input type="text" name='address' value={formData.address} autoComplete='off' autoSave='off' placeholder='e.g. SriLanka' onChange={handleInput} className='w-full p-2 border rounded-md dark:bg-gray-200 dark:text-white shadow-lg' required />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Specialty:</label>
          <textarea name='cmedications' autoComplete='off' autoSave='off' value={formData.specialty} onChange={handleInput} className='w-full p-2 border rounded-md dark:bg-gray-200 dark:text-white shadow-xl'></textarea>
        </div>
        </div> 
         <div className='flex mt-8 w-full md:col-span-2 justify-center'>
          <button className='bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700' onClick={handleRecord}>
            Add Doctor
          </button>
        </div>  
                
      </div>

  );
};

export default AddDoctors;
