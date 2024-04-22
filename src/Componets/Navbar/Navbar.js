import React from 'react'
import { useState } from 'react';
import './Navbar.css';
import { MdMenu} from 'react-icons/md'
import {RxCross2} from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu,setMenu]= useState("Home")
  const [isMobile, setIsMobile]=useState(false)
    
  return (
    <div className='profile'>
        <div  className='navbar'>
            <ul className={isMobile?"nav-link-mobile":"nav-list"} onClick={()=>setIsMobile(false)}> 
              <li onClick={()=>setMenu("Home")}><Link to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
              <li onClick={()=>setMenu("About")}><Link to='/about'>About</Link>{menu==="About"?<hr/>:<></>}</li>
              <li onClick={()=>setMenu("Resume")}><Link to='/resume'>Resume</Link>{menu==="Resume"?<hr/>:<></>}</li>
              <li onClick={()=>setMenu("Project")}><Link to='/project'>Project</Link>{menu==="Project"?<hr/>:<></>}</li>
              <li onClick={()=>setMenu("Contact")}><Link to='/contact'>Contact</Link>{menu==="Contact"?<hr/>:<></>}</li>
            </ul> 
            <p className='nav-btn' onClick={()=>setIsMobile(!isMobile)} >{isMobile?<RxCross2/>: <MdMenu/>} </p> 
            <p className='footer'>Designed by kaviya thirumali</p>
        </div> 
    </div>
  )
}

export default Navbar