/* eslint-disable no-unused-vars */
import React from 'react';
import { MdEmail } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import Head from '../head/Head';
import './Contacts.css'

// import video from '../../assets/dummy-dentures.mp4'

const Contacts = () => {
    return (
        <div className='contacts flex flex-col space-y-24 pt-8' id='contacts'>
           <Head subTitle='Contacts' title='Reach Us' />
           <div className="flex items-center justify-between w-full">

            <div className='left-contact'>
                <h2>Reach us out</h2>
                <p>We value open communication and strive to provide exceptional services to our members. Whether you have questions, need assisteance with anything, or simply want to learn more about us, we encoirage you to feel free to contact us.
                    Our team is always ready to assist you and address your enquiries promptly.
                    Looking forward to hearing from you and explore how we can support you through your journey.
                </p>

                <div className='contact-info'>
                    <h3><MdEmail className='icon' /> Email</h3>
                    <span>enameldental21@gmail.com</span><br />
                    <span>enameldental21@gmail.com</span>
                </div>
                <div className='contact-info'>
                    <h3><TfiHeadphoneAlt className='icon' /> Call</h3>
                    <span>0795969757</span><br />
                    <span>0700402570</span>
                </div>
                <div className='contact-info'>
                    <h3><FaLocationDot className='icon' /> Location</h3>
                    <span>DeKUT Nyeri</span><br />
                    <span>Embu</span>
                </div>
            </div>

            <div className='right-contact'>
                <form>
                    <label htmlFor="email">Email:</label><br />
                    <input type="text" name='email' placeholder='Enter your email' />

                    <label htmlFor="phone">Phone:</label><br />
                    <input type="tel" name='phone' placeholder='Enter you phone number' />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6" placeholder='Enter your message...'></textarea>

                    <button type='submit' className='btn'>Send</button>
                </form>

                {/* <span>{result}</span> */}
            </div>
           </div>

        </div>
    );
}

export default Contacts;
