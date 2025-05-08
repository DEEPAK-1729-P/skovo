import React from 'react';
import './CareerPathsSection.css';

const CareerPathsSection = () => {
  // Career path data
  const careerPaths = [
    {
      id: 1,
      title: '10th',
      description: 'Foundation for higher education'
    },
    {
      id: 2,
      title: '12th',
      description: 'Gateway to specialized fields'
    },
    {
      id: 3,
      title: 'Diploma',
      description: 'Professional certification courses'
    },
    {
      id: 4,
      title: 'ITI',
      description: 'Industrial training programs'
    },
    {
      id: 5,
      title: 'Degree',
      description: 'Undergraduate programs'
    },
    {
      id: 6,
      title: 'B.Tech',
      description: 'Engineering specializations'
    }
  ];

  return (
    <div className="career-paths-container">
      <h1 className="career-paths-heading">Career Paths</h1>
      
      <div className="career-paths-grid">
        {careerPaths.map((path) => (
          <div key={path.id} className="career-path-card">
            <div className="career-path-content">
              <h2 className="career-path-title">{path.title}</h2>
              <p className="career-path-description">{path.description}</p>
            </div>
            <div className="career-path-accent"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPathsSection; 