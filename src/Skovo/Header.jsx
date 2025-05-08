import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>SKOVO</h1>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#career-paths">Career Paths</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
