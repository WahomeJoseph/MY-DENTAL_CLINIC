/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Pay = () => {
    const [formData,setFormData] = useState({
        phone: '',
        amount: '',
    });

    const handleChange = (event) => {
        setFormData(formData => ({...formData, [event.target.name]: event.target.value, }))
    }

    const  handlePay = async () =>{
        const {phone,amount} = formData;

        if (!phone) {
            return toast.error('Phone cannot be empty!')
        }
        if (!amount) {
            return toast.error('Amount cannot be empty!')
        }

        try{
            const response = await axios.post('http://localhost:8080/token')
            console.log(response)
        } catch(error){
            return toast.error('Error!')
        }
    }
  return (
    <form className='mx-auto my-20 flex flex-col space-y-10 shadow-2xl rounded-lg border-0 w-fit p-6'>
      <div className='flex flex-col space-y-3'>
      <h1 className="font-bold text-black text-2xl text-center">Pay with <span className='text-green-600'>M-Pesa</span></h1>
      </div>

      <div className='flex flex-col space-y-3'>
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" name='phone' value={formData.phone} className='px-3 ring-1 ring-blue-500 p-2 rounded-full w-80' autoComplete='off' autoSave='off' placeholder='0712345678' onChange={handleChange}/>
      </div>

      <div className='flex flex-col space-y-3'>
        <label htmlFor="amount">Amount in Kshs:</label>
        <input type="amount" name='amount' value={formData.amount} className='px-3 ring-1 ring-blue-500 p-2 rounded-full w-80' autoComplete='off' autoSave='off' placeholder='5000' onChange={handleChange}/>
      </div>

      <button className='flex justify-center items-center outline-none bg-green-500 text-white font-medium p-2 rounded-full' onClick={handlePay}>Pay here</button>
    </form>
  )
}

export default Pay
