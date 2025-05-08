import React from 'react';
import './ContactSection.css';
import { MessageSquare, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">You Can Reach Us</h1>
      
      <div className="contact-cards-container">
        {/* Message Contact Card */}
        <div className="contact-card">
          <div className="icon-container">
            <MessageSquare className="contact-icon" size={48} color="#4169E1" />
          </div>
          <h2 className="contact-type">Message</h2>
          <p className="contact-description">
            Send us a message and we'll respond within 24 hours
          </p>
          <a href="#" className="contact-button">
            Chat Now
          </a>
        </div>

        {/* Phone Contact Card */}
        <div className="contact-card">
          <div className="icon-container">
            <Phone className="contact-icon" size={48} color="#4169E1" />
          </div>
          <h2 className="contact-type">Phone</h2>
          <p className="contact-description">
            Call us directly at our helpline for immediate assistance
          </p>
          <a href="tel:+1234567890" className="contact-button">
            +91 7729898780
          </a>
        </div>

        {/* Email Contact Card */}
        <div className="contact-card">
          <div className="icon-container">
            <Mail className="contact-icon" size={48} color="#4169E1" />
          </div>
          <h2 className="contact-type">Email</h2>
          <p className="contact-description">
            Drop us an email and we'll get back to you
          </p>
          <a href="mailto:skovo.edu.in@gmail.com" className="contact-button email-button">
            skovo.edu.in@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;