/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Home.css'

const Home = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])
    const slides = [
        {
            url:"https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Welcome to Enamel Dental Clinic,Where Your Smile Meets Expert Care and Passionate Service"
        },
        {
            url:"https://images.unsplash.com/photo-1633951450008-8ad6dd373874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "We offer professional care from experienced dental professionals, ensuring personalized, comprehensive treatment for vibrant, radiant smiles."
        },
        {
            url:"https://images.unsplash.com/photo-1511766443616-f41c8cadf015?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "We are conveniently located in the heart of the Nairobi, Nyeri, Nakuru cities, providing easy access to exceptional dental care for all patients."

        },    
        {
            url:"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Our services at Enamel Dental Clinic include comprehensive dental services including routine check-ups, cleanings, fillings, cosmetic dentistry, orthodontics, and emergency care, all provided by our skilled and compassionate dental professionals."
        },
        {
            url:"https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "We are open Monday to Friday from 8 AM to 8 PM, and weekends from 8 AM to 4 PM, as well as the holidays ensuring flexible appointment options."
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlide = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };

      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

      useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
      }, [currentIndex]);
    return (
        <div className="relative group object-cover h-[680px] w-full py-22">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-[100%] rounded-1xl bg-center bg-cover duration-5000">
        </div>

      <div data-aos='fade-in' className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-[#f0f8ff] text-center px-24'>
        <h2 className='text-2xl font-bold text-center'>{slides[currentIndex].text}</h2>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-bgColor hover:text-white">
        <FaChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-bgColor hover:text-white">
        <FaChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
        // <div className='hero'>
        //         <div className='homeContent container'>
        //             <div className='homeText'>
        //                 <h1 className='homeTitle'>Enamel Dental Care</h1>
        //                 <p className='homeDesc'><b>Enamel Dental Clinic, where your smile and beauty is our priority.
        //                     We are passionate team of dental professionals dedicated <br />to providing personalized dental care
        //                     to help you achieve and maintain the vibrant, radiant smile you deserve</b>
        //                 </p>
        //             </div>
        //         </div>
        // </div>


    );
}

export default Home;
