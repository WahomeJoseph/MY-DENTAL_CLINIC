/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
        // checkboxChecked: false,
    });

    const handleChange = (event) => {
        setFormData(formData => ({ ...formData, [event.target.name]: event.target.value, }))
    }
    const navigate = useNavigate();

    const handleLogin = async () => {
        const {email, password} = formData;

        if (!email) {
            return toast.error("Email cannot be empty");
          }
          if (!password) {
            return toast.error("Password cannot be empty");
          }

          try {
            const response = await axios.post('http://localhost:8080/login' , {email,password})
            console.log(response)

            if (response.data.message === 'Login successful!') {
                return navigate('/')
            }
            if (response.data.message === 'Email cannot be empty!') {
                toast.error('Email cannot be empty!')
            }
            if (response.data.message === 'No match Found!') {
                toast.error('User does not exist.Proceed to register!')
            }
        } catch (error) {
            toast.error('Error!')
        }
        };

    return (
        <div className='flex justify-center items-center w-full min-h-screen pt-20' id='login'>
            <Toaster position='top-center'></Toaster>
            <div className='bg-white p-3 rounded w-70'>
                <h1 className='text-center text-2xl mb-3'>Log in</h1>

                <div className='text-start p-6 shadow-2xl border-t-4 border-[#08003a] rounded-lg mx-8'>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' value={formData.email} autoComplete='off' autoSave='off' placeholder='Enter your email' className='form-control rounded-1' onChange={handleChange} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' value={formData.password} autoComplete='off' autoSave='off' placeholder='Enter your password' className='form-control rounded-1' onChange={handleChange}/>
                    </div>

                    <button className='btn form-control btn-success  w-100 rounded-0' onClick={handleLogin}>Log in</button> 
                    <span>Have no account?</span>
                    <Link to="/register" className='btn form-control btn-success w-100 rounded-0 text-decoration-none'>Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
