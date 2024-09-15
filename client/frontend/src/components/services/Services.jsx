/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Head from '../head/Head';
import { MdLocalHospital } from "react-icons/md";
import {motion} from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
    useEffect(()=>{
        AOS.init({duration: 5000})
    })
    const fadeRight = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
      };
  return (
    <div className='services bg-gray-50 py-10' id='services'>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeRight}>
            <Head subTitle='Our Services' title='What We Offer' />
        </motion.div>

      <div data-aos='fade-up' className='grid-cols-2 service-container pt-5 max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <div className='service-card bg-white shadow-lg rounded-lg overflow-hidden'>
          <video muted autoPlay className='w-full h-[200px] object-cover rounded-t-lg'>
            <source src='./public/braces.mp4' type='video/mp4'/>
          </video>
          <div className='serviceDesc p-6'>
            <MdLocalHospital className='icon text-bgColor text-3xl mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Orthodontics</h2>
            <p className='text-gray-600'>It is a specialized dental service at our clinic, dedicated to aligning and straightening teeth for improved function and aesthetics. We offer comprehensive in-office orthodontic solutions to help our valued patients achieve a healthier, more confident smile through precise and effective treatments.</p>
          </div>
        </div>

        <div className='service-card bg-white shadow-2xl rounded-lg overflow-hidden'>
        <video muted autoPlay className='w-full h-[200px] object-cover rounded-t-lg'>
            <source src='./public/whiten.mp4' type='video/mp4'/>
          </video>
          <div className='serviceDesc p-6'>
            <MdLocalHospital className='icon text-bgColor text-3xl mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Teeth Extraction</h2>
            <p className='text-gray-600'>A common dental procedure at our clinic, aimed at removing problematic teeth to maintain overall oral health. We provide professional in-office teeth extraction services to ensure our valued patients experience a comfortable and confident dental care journey.</p>
          </div>
        </div>

        <div className='service-card bg-white shadow-lg rounded-lg overflow-hidden'>
        <video muted autoPlay className='w-full h-[200px] object-cover rounded-t-lg'>
            <source src='./public/smile.mp4' type='video/mp4'/>
          </video>
          <div className='serviceDesc p-6'>
            <MdLocalHospital className='icon text-bgColor text-3xl mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Teeth Whitening</h2>
            <p className='text-gray-600'>It is a popular cosmetic dental procedure at our clinic, which aims to brighten and whiten the appearance of teeth by removal of stains and discoloration of teeth enamel. We offer in-office teeth whitening solutions to help our esteemed patients achieve a brighter and more confident smile.</p>
          </div>
        </div>

        <div className='service-card bg-white shadow-lg rounded-lg overflow-hidden'>
        <video muted autoPlay className='w-full h-[200px] object-cover rounded-t-lg'>
            <source src='./public/canal.mp4' type='video/mp4'/>
          </video>
          <div className='serviceDesc p-6'>
            <MdLocalHospital className='icon text-bgColor text-3xl mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Teeth Canal Filling</h2>
            <p className='text-gray-600'>It is a crucial dental procedure at our clinic, focusing on treating and sealing the inner canals of teeth to prevent infection and decay. We offer meticulous in-office canal filling services to ensure our esteemed patients maintain healthy, pain-free teeth and enjoy long-lasting dental wellness.</p>
          </div>
        </div>

        <div className='service-card bg-white shadow-lg rounded-lg overflow-hidden'>
        <video muted autoPlay className='w-full h-[200px] object-cover rounded-t-lg'>
            <source src='./public/dentures.mp4' type='video/mp4'/>
          </video>
          <div className='serviceDesc p-6'>
            <MdLocalHospital className='icon text-bgColor text-3xl mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Dentures</h2>
            <p className='text-gray-600'>Dentures are a popular restorative option at our clinic, designed to replace missing teeth and surrounding tissues. These removable prosthetics provide an effective solution for those who have lost multiple teeth, restoring both function and appearance. We offer custom-fitted complete and partial dentures to help our esteemed patients regain a natural and confident smile.</p>
          </div>
        </div>

        <div className='service-card bg-white shadow-lg rounded-lg overflow-hidden'>
        <video muted autoPlay className='w-full h-[200px] object-cover rounded-t-lg'>
            <source src='./public/child.mp4' type='video/mp4'/>
          </video>
          <div className='serviceDesc p-6'>
            <MdLocalHospital className='icon text-bgColor text-3xl mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Pediatric Dentistry</h2>
            <p className='text-gray-600'>Pediatric dentistry is a vital service at our clinic, focusing on the oral health of children from infancy through the teen years. We provide comprehensive dental care, including preventive and therapeutic treatments, to ensure our young patients maintain healthy teeth and gums. Our child-friendly environment and specialized techniques help make each visit comfortable and positive, fostering a lifetime of confident smiles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
