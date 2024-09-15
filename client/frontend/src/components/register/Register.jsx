/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({
            username: '',
            email: '',
            password: '',
            confirm_password: '',
        })

    const navigate = useNavigate();
    const {username, email, password, confirm_password} = formData

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    };

   const  handleRegister = async () => {
    const {username, email, password, confirm_password} = formData; 
    if (!username) {
        return toast.error("Username cannot be empty");
      }
      if (!email) {
        return toast.error("Email cannot be empty");
      }
      if (!password) {
        return toast.error("Password cannot be empty");
      }
      if (!confirm_password) {
        return toast.error("Confirmation password cannot be empty");
      }
      if (password !== confirm_password) {
        return toast.error("Confirmation password must match password");
      }   

      try {
        const response = await axios.post('http://localhost:8080/register', {username, email, password, confirm_password})
        console.log(response);
        if (response.data.message === 'Registration successful!') {
           return navigate('/login')
        }
      } catch (error) {
        toast.error('Internal server error')
      }
    }
        return (
            <div className='flex justify-center items-center w-full min-h-screen pt-32'>
                <div className='bg-white p-3 rounded w-70'>
                <Toaster position='top-center'></Toaster>
                    <h1 className='text-center text-2xl text-black mb-3'>Create Account</h1>
                    <div className='text-start p-6 shadow-2xl border-t-4 border-[#08003a] rounded-lg mx-8'>
                        <div className='mb-3'>
                            <label htmlFor="name">Username</label>
                            <input type="text" name='username' autoComplete='off' value={formData.username} placeholder='Enter your name' className='form-control rounded-1 shadow-1xl'  onChange={handleChange}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' autoComplete='off' value={formData.email} placeholder='Enter your email' className='form-control rounded-1 shadow-1xl' onChange={handleChange}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' autoComplete='off' value={formData.password} placeholder='Enter your password' className='form-control rounded-1 shadow-1xl' onChange={handleChange}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name='confirm_password' autoComplete='off' value={formData.confirm_password} placeholder='Confirm your password' className='form-control rounded-1 shadow-1xl' onChange={handleChange}/>
                        </div>
    {/* disabled={formData.username == '' || formData.email == '' || formData.password == ''} */}
                        <button className='btn btn-success w-100 rounded-0'  onClick={handleRegister}>Create Account</button>
                        <span>Already have an account?</span>
                        <Link to="/login" className='btn btn-success w-100 rounded-0 text-decoration-none'>Log in</Link>
                    </div>
                </div>
            </div>
        );
    }

export default Register;
