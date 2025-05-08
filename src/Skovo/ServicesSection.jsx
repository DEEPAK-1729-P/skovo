import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      
      <div className="services-grid">
        {/* Home Tutor Card */}
        <div className="service-card">
          <div className="icon-container">
            <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="#4169E1" stroke="none">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,8.39C13.57,9.4 15.42,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20C9,20 6.39,18.34 5,15.89L6.75,14V13A1.25,1.25 0 0,1 8,11.75A1.25,1.25 0 0,1 9.25,13V14H12M16,11.75A1.25,1.25 0 0,0 14.75,10.5A1.25,1.25 0 0,0 13.5,11.75A1.25,1.25 0 0,0 14.75,13A1.25,1.25 0 0,0 16,11.75M16.5,4.5A2,2 0 0,1 18.5,6.5A2,2 0 0,1 16.5,8.5A2,2 0 0,1 14.5,6.5A2,2 0 0,1 16.5,4.5Z" />
            </svg>
          </div>
          <h2 className="service-title">Home Tutor</h2>
          <p className="service-description">
            Personalized one-on-one learning experience at your home
          </p>
        </div>

        {/* Institutions Card */}
        <div className="service-card">
          <div className="icon-container">
            <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="#4169E1" stroke="none">
              <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
            </svg>
          </div>
          <h2 className="service-title">Institutions</h2>
          <p className="service-description">
            Partner with schools and colleges for comprehensive education
          </p>
        </div>

        {/* Academies Card */}
        <div className="service-card">
          <div className="icon-container">
            <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="#4169E1" stroke="none">
              <path d="M5,3V21H19V3H5M7,5H17V7H7V5M7,9H17V11H7V9M7,13H17V15H7V13M7,17H14V19H7V17Z" />
            </svg>
          </div>
          <h2 className="service-title">Academies</h2>
          <p className="service-description">
            Specialized training centers for competitive exams
          </p>
        </div>

        {/* Premium Memberships Card */}
        <div className="service-card">
          <div className="icon-container">
            <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="#4169E1" stroke="none">
              <path d="M12,2L15.09,8.26L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L8.91,8.26L12,2M12,8L10.5,11.22L7,11.75L9.5,14.25L9,18L12,16L15,18L14.5,14.25L17,11.75L13.5,11.22L12,8Z" />
            </svg>
          </div>
          <h2 className="service-title">Premium Memberships</h2>
          <p className="service-description">
            Exclusive learning resources and personalized guidance
          </p>
        </div> <br /> <br />

        {/* Job Assistance Card */}
        <div className="service-card">
          <div className="icon-container">
            <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="#4169E1" stroke="none">
              <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
            </svg>
          </div>
          <h2 className="service-title">Job Assistance</h2>
          <p className="service-description">
            Career guidance and placement support for graduates
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;