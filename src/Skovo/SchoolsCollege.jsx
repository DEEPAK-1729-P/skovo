import React, { useState } from 'react';
import './SchoolsColleges.css';

const SchoolsColleges = () => {
  const [activeTab, setActiveTab] = useState('schools');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Sample data for schools
  const schools = [
    {
      id: 1,
      name: "Springfield High School",
      type: "public",
      location: "Springfield, IL",
      ranking: 4.5,
      description: "A leading public high school with excellent academic programs and extracurricular activities.",
      highlights: ["Advanced Placement courses", "Award-winning sports teams", "STEM focus", "Arts program"],
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Oakridge Academy",
      type: "private",
      location: "Oakridge, CA",
      ranking: 4.8,
      description: "Elite private institution known for college preparation and holistic education approach.",
      highlights: ["Small class sizes", "100% college acceptance", "International exchange programs", "Modern facilities"],
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Westview Charter School",
      type: "charter",
      location: "Westview, NY",
      ranking: 4.3,
      description: "Innovative charter school with focus on personalized learning and community engagement.",
      highlights: ["Project-based learning", "Technology integration", "Community partnerships", "Flexible scheduling"],
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Riverdale Technical High",
      type: "technical",
      location: "Riverdale, WA",
      ranking: 4.6,
      description: "Specialized technical high school preparing students for careers in various industries.",
      highlights: ["Career certifications", "Industry partnerships", "Hands-on training", "Job placement services"],
      image: "https://via.placeholder.com/150"
    }
  ];

  // Sample data for colleges
  const colleges = [
    {
      id: 1,
      name: "Harrington University",
      type: "university",
      location: "Boston, MA",
      ranking: 4.7,
      description: "Prestigious university offering comprehensive undergraduate and graduate programs.",
      highlights: ["Research opportunities", "Distinguished faculty", "Global alumni network", "Modern campus"],
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Coastal Community College",
      type: "community",
      location: "San Diego, CA",
      ranking: 4.2,
      description: "Affordable community college with strong transfer programs and career training.",
      highlights: ["Transfer guarantees", "Flexible scheduling", "Career services", "Financial aid resources"],
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Evergreen Liberal Arts College",
      type: "liberal-arts",
      location: "Portland, OR",
      ranking: 4.9,
      description: "Small liberal arts college known for critical thinking and interdisciplinary studies.",
      highlights: ["Small class sizes", "Close faculty mentorship", "Study abroad programs", "Arts emphasis"],
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Technology Institute",
      type: "technical",
      location: "Silicon Valley, CA",
      ranking: 4.8,
      description: "Leading technical institute specializing in engineering, computer science, and innovation.",
      highlights: ["Industry partnerships", "Innovation labs", "Internship placement", "Cutting-edge research"],
      image: "https://via.placeholder.com/150"
    }
  ];

  // Get active data based on tab
  const activeData = activeTab === 'schools' ? schools : colleges;

  // Filter data based on search and type
  const filteredData = activeData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    return matchesSearch && matchesType;
  });

  // Get unique types for filter dropdown
  const getUniqueTypes = () => {
    const types = activeData.map(item => item.type);
    return ['all', ...new Set(types)];
  };

  return (
    <div className="schools-colleges-container">
      <div className="hero-section">
        <h1>{activeTab === 'schools' ? 'Find Your Ideal School' : 'Discover Top Colleges'}</h1>
        <p>Explore {activeTab === 'schools' ? 'K-12 educational institutions' : 'higher education options'} to find the perfect fit for your future.</p>
      </div>

      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'schools' ? 'active' : ''}`}
          onClick={() => setActiveTab('schools')}
        >
          K-12 Schools
        </button>
        <button 
          className={`tab-button ${activeTab === 'colleges' ? 'active' : ''}`}
          onClick={() => setActiveTab('colleges')}
        >
          Colleges & Universities
        </button>
      </div>

      <div className="search-filter-section">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-dropdown">
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            {getUniqueTypes().map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="info-section">
        <h2>Why Choose the Right {activeTab === 'schools' ? 'School' : 'College'}?</h2>
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">🎯</div>
            <h3>Future Success</h3>
            <p>The right educational institution can set the foundation for your future career and success.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🌱</div>
            <h3>Personal Growth</h3>
            <p>Find an environment that nurtures your talents and helps you develop essential life skills.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🤝</div>
            <h3>Connections</h3>
            <p>Build networks and form relationships that can benefit you throughout your life and career.</p>
          </div>
        </div>
      </div>

      <div className="listings-section">
        <h2>{activeTab === 'schools' ? 'Featured Schools' : 'Featured Colleges'}</h2>
        {filteredData.length > 0 ? (
          <div className="listings-grid">
            {filteredData.map(item => (
              <div className="listing-card" key={item.id}>
                <div className="listing-image">
                  <img src={item.image} alt={item.name} />
                  <span className="rating">{item.ranking}/5</span>
                </div>
                <div className="listing-content">
                  <h3>{item.name}</h3>
                  <p className="location">{item.location}</p>
                  <p className="type">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
                  <p className="description">{item.description}</p>
                  <div className="highlights">
                    <h4>Highlights:</h4>
                    <ul>
                      {item.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No {activeTab} found matching your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </div>

      <div className="resources-section">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Admission Guide</h3>
            <p>Step-by-step guidance for the application process.</p>
            <button className="resource-btn">View Guide</button>
          </div>
          <div className="resource-card">
            <h3>Financial Aid</h3>
            <p>Information about scholarships, grants, and financial assistance.</p>
            <button className="resource-btn">Explore Options</button>
          </div>
          <div className="resource-card">
            <h3>Virtual Tours</h3>
            <p>Take virtual tours of campuses from the comfort of your home.</p>
            <button className="resource-btn">Start Tours</button>
          </div>
          <div className="resource-card">
            <h3>Parent Resources</h3>
            <p>Helpful information for parents navigating educational choices.</p>
            <button className="resource-btn">Parent Portal</button>
          </div>
        </div>
      </div>

      <div className="newsletter-section">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest information on {activeTab === 'schools' ? 'schools' : 'colleges'} and educational opportunities.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SchoolsColleges;