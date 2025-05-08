import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/support">Support Center</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/feedback">Feedback</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Terms & Conditions</h3>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 SKOVO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;