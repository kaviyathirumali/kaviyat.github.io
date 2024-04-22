import React from 'react'
import {FaRegArrowAltCircleRight} from 'react-icons/fa' 
import './About.css'
const About = () => {
    return (
        <div className='about'>
            <h1>Kaviya Thirumali</h1>
            <div className='about-head'>
                <div className='about-content'>
                <div className='about-title'>
                    <h3>ABOUT ME</h3>
                </div>
                <h2>Software Developer</h2>
                <div className='about-span'>
                    <p><span><FaRegArrowAltCircleRight /></span> <p>Birthday:</p> 2001</p>
                    <p><span><FaRegArrowAltCircleRight /></span> <p>Phone:</p> +91 9361453087</p>
                    <p><span><FaRegArrowAltCircleRight /></span> <p>City:</p> Trichy</p>
                    <p><span><FaRegArrowAltCircleRight /></span> <p>Degree:</p> MCA</p>
                    <p><span><FaRegArrowAltCircleRight /></span> <p>Email:</p> kaviyathiru007@gmail.com</p>
                </div>
                <p>Hello! I'm kaviya, As a fresher in web development and React, focusing on mastering fundamental concepts like HTML, CSS, JavaScript, and React components will help you shine brightly in the digital world. Keep learning, practicing, and exploring new technologies to stay ahead in this dynamic field.</p>
                </div>
            </div>
        </div>
    )
}

export default About