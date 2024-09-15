/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Head from '../head/Head';
import './About.css'

const About = () => {
    return (
        <div className='about flex flex-col space-y-6 pt-8 px-8 pb-0' id='about'>
            <Head subTitle='About Us' title='Why us?' />
            
            <div className="flex flex-row w-full justify-between">            
                <div className='about-left'>
                    <img src="./public/teeth-white.jpg" alt="" className='about-img' />
                </div>

                <div className='about-right'>
                    <h3>About Enamel</h3>
                    <h2>Giving you infinite smiles</h2>
                    <p>Strategically nested in the heart of <a href=""><span>Nyeri</span></a> offering easy accessibility to patients seeking top-tier dental care in the area.
                        Situated amidst the bustling cityscape,Our clinic boasts a welcoming ambiance, providing a tranquil retreat from the urban hustle and bustle.
                        Whether arriving on public transport or personal vehicle, our prime location coupled with ample parking options,makes visiting <a href=""><span>Enamel Clinic </span></a>hassle-free experience
                    </p>
                    <p>We offer comprehensive range of services tailored to meet the diverse needs of our patients.Our dedicated team of experienced professionals utilizes state-of-the-art equipment
                        and innovative techniques to deliver high quality care.With advanced technology like digital X-rays and laser dentistry, we ensure precise diagnostics and treatment.
                    </p>
                    <p>For patients seeking to enhance their smiles, we offer cosmetic dentistry such as <a href=""><span>teeth whitening</span></a>,
                        <a href=""><span>orthodontics</span></a>,<a href=""><span>veiners</span></a>, including other services.Our goal is to provide compassionate, patient-centred care and strive to exceed expectations
                        in every aspect of our practice.Other branches include <b><a href=""><span><span>Nairobi</span></span></a></b>,<b><a href=""><span><span>Nanyuki</span></span></a></b>,<b><a href=""><span><span>Embu</span></span></a></b>
                    </p>

                    <button className='btn flex items-center justify-center w-fit px-8 py-2'>Learn more <FaArrowRightLong className='icon' /></button>
                </div>
            </div>
        </div>
    );
}

export default About;
