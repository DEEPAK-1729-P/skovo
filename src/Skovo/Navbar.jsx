import React from 'react';
import './Navbar.css';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <GraduationCap size={24} className="logo-icon" />
        <span className="logo-text">SKOVO</span>
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="auth-buttons">
        <button className="profile-btn">View Profile</button>
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;