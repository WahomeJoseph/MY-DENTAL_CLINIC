/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './Testimonials.css'
import Head from '../head/Head';

const Testimonials = () => {

    const patients = ['Ahmed','Pikash','Doe','Kim','Abby']
    const age = [41,21,27,53,36]

    const slider = useRef();
    let tx = 0

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = ()=> {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div className='testimony py-8' id='testimony'>
            <Head subTitle='Reviews' title='Patients Reviews' />
            <img src="./public/back.png" alt="" className='left-icon' onClick={slideBackward} />
            <img src="./public/next.png" alt="" className='right-icon' onClick={slideForward} />

            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src="./public/patient.png" alt="" />
                                <div className='user-text'>
                                    <h3>{patients[0]}</h3>
                                    <span>{age[0]}</span>
                                </div>
                            </div>
                            <p>Genuinely, this institution is life-changing. Between passionate professors who took a personal interest in my success,
                                clubs that allowed me to pursue various interests and events that exposed me to new cultures,I grew both intellectually and emotionally.
                                Despite the workload challenges, I appreciate the high starndards that taught me discipline and time management, a priceless skills for my carrer</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src="./public/patient.png" alt="" />
                                <div className='user-text'>
                                    <h3>{patients[1]}</h3>
                                    <span>{age[1]}</span>
                                </div>
                            </div>
                            <p>Genuinely, this institution is life-changing. Between passionate professors who took a personal interest in my success,
                                clubs that allowed me to pursue various interests and events that exposed me to new cultures,I grew both intellectually and emotionally.
                                Despite the workload challenges, I appreciate the high starndards that taught me discipline and time management, a priceless skills for my carrer</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src="./public/patient.png" alt="" />
                                <div className='user-text'>
                                    <h3>{patients[2]}</h3>
                                    <span>{age[2]}</span>
                                </div>
                            </div>
                            <p>Genuinely, this institution is life-changing. Between passionate professors who took a personal interest in my success,
                                clubs that allowed me to pursue various interests and events that exposed me to new cultures,I grew both intellectually and emotionally.
                                Despite the workload challenges, I appreciate the high starndards that taught me discipline and time management, a priceless skills for my carrer</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src="./public/patient.png" alt="" />
                                <div className='user-text'>
                                    <h3>{patients[3]}</h3>
                                    <span>{age[3]}</span>
                                </div>
                            </div>
                            <p>Genuinely, this institution is life-changing. Between passionate professors who took a personal interest in my success,
                                clubs that allowed me to pursue various interests and events that exposed me to new cultures,I grew both intellectually and emotionally.
                                Despite the workload challenges, I appreciate the high starndards that taught me discipline and time management, a priceless skills for my carrer</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src="./public/patient.png" alt="" />
                                <div className='user-text'>
                                    <h3>{patients[4]}</h3>
                                    <span>{age[4]}</span>
                                </div>
                            </div>
                            <p>Genuinely, this institution is life-changing. Between passionate professors who took a personal interest in my success,
                                clubs that allowed me to pursue various interests and events that exposed me to new cultures,I grew both intellectually and emotionally.
                                Despite the workload challenges, I appreciate the high starndards that taught me discipline and time management, a priceless skills for my carrer</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonials;
