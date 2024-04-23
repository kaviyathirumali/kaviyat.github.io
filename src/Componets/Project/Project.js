import React from 'react'
import project_1 from '../../Assets/IMG_20240130_154916.jpg'
import project_2 from '../../Assets/Screenshot_16-3-2024_203937_localhost.jpeg'
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import './Project.css';
const Project = () => {
  return (
    <div className='project'>
        <div className='project-tittle'>
            <h1>Kaviya Thirumali</h1>
        </div>
        <div className='project-head'>
            <div className='project-content'>
            <div className='project-text'>
                <h3>PROJECTS</h3>
                <div className='project-1'>
                    <h1><span><FaRegArrowAltCircleRight /></span>INTEGRATED PLATFORM FOR INFORMATION ABOUT INDIAN UNIVERSITY</h1>
                    <img src={project_1} alt=''/>
                    <p>React.js</p>
                    <p>Role : Front-end Development</p>
                </div>
                <div className='project-1'>
                    <h1><span><FaRegArrowAltCircleRight /></span>ONLINE BUS BOOKING WEBSITE</h1>
                    <img src={project_2} alt=''/>
                    <p>React.js</p>
                    <p>Role : Front-end Development</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Project