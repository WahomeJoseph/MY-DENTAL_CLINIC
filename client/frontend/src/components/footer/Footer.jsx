/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { FaXTwitter, FaFacebookF, FaInstagram, FaMobileScreenButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp, IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-bgColor items-center justify-center text-white py-10 px-24 md:px-20">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-10 mb-10">
        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#testimonials" className="hover:underline">Patients</a></li>
            <li><a href="#contacts" className="hover:underline">Contacts</a></li>
            <li><a href="#appointments" className="hover:underline">Book Appointment</a></li>
          </ul>
        </div>
        {/* Clinic Opening Hours */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Opening Hours</h2>
          <ul className="space-y-2">
            <li>Monday 8am - 8pm</li>
            <li>Tuesday 8am - 8pm</li>
            <li>Wednesday 8am - 8pm</li>
            <li>Thursday 8am - 8pm</li>
            <li>Friday 8am - 8pm</li>
            <li>Weekend 8am - 4pm</li>
          </ul>
        </div>
        {/* Footer Contacts */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Contacts</h2>
          <p className="text-gray-400">For Affordable services and guarantee for infinite smiles</p>
          <input type="text" className="w-full py-2 px-3 rounded bg-[#fafff8] text-black" placeholder="Enter your email" />
          <button className="w-full py-2 mt-2 bg-blue-600 hover:bg-blue-700 rounded">Subscribe</button>
          <div className="flex items-center space-x-2 mt-4">
            <IoLocation className="text-2xl" />
            <span>Nyeri</span>
          </div>
        </div>
      </div>

      {/* Insurance Partners
      <div className="space-y-4 pb-3">
          <h2 className="text-lg font-semibold">Our Insurance Partners</h2>
          <div className="flex flex-row gap-4">
            <a href="https://www.apainsurance.org/">
              <img src="./APA-logo.png" alt="APA" className="w-full h-auto bg-cover" />
            </a>
            <a href="https://aar-insurance.com/">
              <img src="./AAR-Logo.png" alt="AAR" className="w-full h-auto bg-cover" />
            </a>
            <a href="https://www.nhif.or.ke/">
              <img src="./NHIF-logo.jpg" alt="NHIF" className="w-full h-auto bg-cover" />
            </a>
            <a href="https://www.oldmutual.com/">
              <img src="./OldMutual-logo.png" alt="Old Mutual" className="w-full h-auto bg-cover" />
            </a>
            <a href="https://www.mua.mu/">
              <img src="./MUA-logo.png" alt="MUA" className="w-full h-auto bg-cover" />
            </a>
            <a href="https://cic.co.ke/">
              <img src="./CIC-logo.png" alt="CIC" className="w-full h-auto bg-cover" />
            </a>
          </div>
        </div> */}


      <div className="border-t border-gray-600 pt-5 flex flex-col md:flex-row justify-between items-center">
        <span className="mb-4 md:mb-0">&copy;2024 Stupendous Me All Rights Reserved</span>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <FaXTwitter className="icon text-2xl hover:text-blue-500 cursor-pointer" />
          <MdEmail className="icon text-2xl hover:text-red-500 cursor-pointer" />
          <FaFacebookF className="icon text-2xl hover:text-blue-700 cursor-pointer" />
          <IoLogoWhatsapp className="icon text-2xl hover:text-green-500 cursor-pointer" />
          <FaInstagram className="icon text-2xl hover:text-pink-500 cursor-pointer" />
          <FaMobileScreenButton className="icon text-2xl hover:text-gray-400 cursor-pointer" />
        </div>
        <ul className="flex space-x-4 justify-between">
          <li><a href="" className="hover:underline">Terms of Service</a></li>
          <li><a href="" className="hover:underline">Privacy Policy</a></li>
          <li><a href="" className="hover:underline">FAQs</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
