import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { MdMenu } from 'react-icons/md';
import { RiCloseLine } from 'react-icons/ri'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className='profile'>
      <div className='navbar'>
        <ul className={isMobile ? "nav-link-mobile" : "nav-list"} onClick={() => setIsMobile(false)}>
          <li onClick={() => setMenu("Home")}><Link to='/kaviyat.github.io'>Home</Link>{menu === "Home" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("About")}><Link to='/about'>About</Link>{menu === "About" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("Resume")}><Link to='/resume'>Resume</Link>{menu === "Resume" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("Project")}><Link to='/project'>Project</Link>{menu === "Project" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("Contact")}><Link to='/contact'>Contact</Link>{menu === "Contact" ? <hr /> : <></>}</li>
        </ul>
        <div className='nav-btn' onClick={() => setIsMobile(!isMobile)}>{isMobile ? <RiCloseLine /> : <MdMenu />}</div> 
      </div>
      <div className='footer'>Designed by kaviya thirumali</div> 
    </div>
  );
}

export default Navbar;