import React from 'react'
import { FaLocationDot } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { MdAddCall } from "react-icons/md"
import { IoShareSocialSharp } from "react-icons/io5"
import './Contact.css'
import { IoLogoGithub } from "react-icons/io5"
import { ImLinkedin } from "react-icons/im"
const Contact = () => {
  return (
    <div className='contact'>
        <h1>Kaviya Thirumali</h1>
        <div className='contact-head'>
            <div className='contact-content'>
                <div className='contact-title'>
                    <h3>CONTACT ME</h3>
                </div>
                <div className='contact-span'>
                    <span><FaLocationDot /></span>
                    <p className='contact-p'>
                        <h2>My Address</h2>
                        <p>Thuraiyur - 621008</p>
                    </p>
                </div>
                <div className='contact-span'>
                    <span><IoShareSocialSharp /></span>
                    <p className='contact-p'>
                        <h2>Social Media</h2>
                        <div className='icon'>
                            <p onClick={() => window.location.href = 'https://GitHub.com/kaviyathirumali'}><IoLogoGithub /></p>
                            <p onClick={() => window.location.href = 'https://www.linkedin.com/in/kaviya-thiru-705b52219'}><ImLinkedin /></p>
                        </div>
                    </p>
                </div>
                <div className='contact-span'>
                    <span><IoIosMail /></span>
                    <p className='contact-p'>
                        <h2>Email Me</h2>
                        <p>kaviyathiru007@gmail.com</p>
                    </p>
                </div>
                <div className='contact-span'>
                    <span><MdAddCall /></span>
                    <p className='contact-p'>
                        <h2>Call Me</h2>
                        <p>+91 9361453087</p>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact