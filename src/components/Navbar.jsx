import React, { useState,useEffect } from 'react'
import '../design/navbar.css'
import { Button } from 'evergreen-ui';
import { Avatar,Icon } from 'evergreen-ui';
import { FaGithubSquare } from "react-icons/fa";
import logo from '../assets/logo_v.png';
import axios from 'axios';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serverStatus,setServerStatus]=useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const getServerStatus = async () => {
    const response = await axios.get('http://localhost:3000/status');
    try{
      if (response.status === 200) {
      setServerStatus(response.data.status);
      }
    }
    catch (error) {
      console.error('Error fetching server status:', error);
      setServerStatus('Offline');
    }
  }

  useEffect(()=>{
    getServerStatus();
  },[]);

  return (
    <nav className="navbar">
      <div className="brand">
        <Avatar
          src={logo}
          name="Logo"
          size={45}
          backgroundColor='transparent'
        />
      </div>

      <div className="menu-icon" id="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#Certifications">Certifications</a></li>
        <li ><a href="#" style={{fontSize:"0.7rem"}}>{serverStatus}</a></li>
      </ul>
      
    </nav>
  )
}

export default Navbar
