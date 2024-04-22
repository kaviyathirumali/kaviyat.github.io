import React from 'react'
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import './Resume.css'
const Resume = () => {
    return (
        <div className='resume'>
            <h1>Kaviya Thirumali</h1>
            <div className='resume-content'>
                <div className='resume-head'>
                    <div className='resume-title'>
                        <h3>RESUME</h3>
                    </div>
                    <div className='education'>
                        <h1>EDUCATION</h1>
                        <div className='timeline'>
                        <span><FaRegArrowAltCircleRight /></span>
                            <div className='timeline-item'>
                                <h3>MASTER OF COMPUTER APPLICATION</h3>
                                <p>2022-2024</p>
                                <p>Srm Arts and Science College</p>
                                <p>86%</p>
                            </div>
                            </div>
                            <div className='timeline'>
                            <span><FaRegArrowAltCircleRight /></span>
                            <div className='timeline-item'>
                                <h3>BACHELOR OF MATHEMATICS</h3>
                                <p>2018-2021</p>
                                <p>Chidhambaram Pillai College for Women</p>
                                <p>91%</p>
                            </div>
                            </div>
                            <div className='timeline'>
                            <span><FaRegArrowAltCircleRight /></span>
                            <div className='timeline-item'>
                                <h3>HSC</h3>
                                <p>2017-2018</p>
                                <p>Zemindhar Higher Secondary School</p>
                                <p>75%</p>
                            </div>
                        </div>
                    </div>
                    <div className='internship'>
                    <h1>INTERNSHIP</h1>
                        <div className='intern-date'>
                            <h3>Web Developer</h3>
                            <p>05/06/2023 to 30/06/2023</p>
                        </div>
                        <p>Ayan tech solution</p>
                        <p>Gained practical, experience in web development on front end technologies, including HTML, CSS, JavaScript, and Bootstrap.</p>
                        <p> Collaborated effectively with the development team, ensuring the seamless integration of front-end components resulting in enhanced functionality and an improved user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume