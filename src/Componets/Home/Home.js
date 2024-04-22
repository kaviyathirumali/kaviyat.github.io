import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import { FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'
//import computer from '../../Assets/computer1.jpg'
const Home = () => {
    return (
        <div className="home-container">
            <div className="text-container">
                <h1>Kaviya Thirumali</h1>
                <h1 className='type-head'>
                    I'm a
                    <div className='type'>
                    <Typewriter
                        words={['Software Developer', 'Frontend Developer', 'Web Developer']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    /><hr/>
                    </div>
                </h1>
                <h3 className='home-link'>
                    <p onClick={() => window.location.href = 'https://www.linkedin.com/in/kaviya-thiru-705b52219'}>
                        <FaLinkedin />
                    </p>
                    <p onClick={() => window.location.href = 'https://GitHub.com/kaviyathirumali'}>
                        <IoLogoGithub />
                    </p>
                </h3>
            </div>
        </div>
    );
};

export default Home;