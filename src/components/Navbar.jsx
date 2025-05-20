import React, { useState } from 'react'
import '../design/navbar.css'
import { Button } from 'evergreen-ui';
import { Avatar,Icon } from 'evergreen-ui';
import { FaGithubSquare } from "react-icons/fa";
import logo from '../assets/logo_v.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

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
      </ul>

    </nav>
  )
}

export default Navbar
