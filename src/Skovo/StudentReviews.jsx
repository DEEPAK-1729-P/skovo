import React, { useState, useRef } from 'react';
import './StudentReviews.css';

const StudentReviews = () => {
  const reviewsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Sample review data
  const reviews = [
    {
      id: 1,
      name: 'Amit Mehta',
      initials: 'AM',
      role: 'B.Tech Student',
      rating: 5,
      comment: 'The home tutoring service has transformed my understanding of complex subjects. My grades improved significantly within just two months!'
    },
    {
      id: 2,
      name: 'Sarah Patel',
      initials: 'SP',
      role: '12th Grade',
      rating: 4.5,
      comment: 'The study materials provided are comprehensive and easy to understand. The practice tests really helped me prepare for my board exams.'
    },
    {
      id: 3,
      name: 'Raj Kumar',
      initials: 'RK',
      role: 'Parent',
      rating: 5,
      comment: 'As a parent, I\'m extremely satisfied with the quality of education provided. The teachers are highly qualified and my child enjoys the interactive learning approach.'
    },
    {
      id: 4,
      name: 'David Thompson',
      initials: 'DT',
      role: 'Diploma Student',
      rating: 4,
      comment: 'The practical approach to technical subjects has been incredibly helpful. The projects gave me real-world experience.'
    },
    {
      id: 5,
      name: 'Priya Sharma',
      initials: 'PS',
      role: 'Engineering Student',
      rating: 5,
      comment: 'The online sessions are so engaging! I never thought virtual classes could be this effective. Highly recommended!'
    },
    {
      id: 6,
      name: 'Michael Chen',
      initials: 'MC',
      role: 'High School Student',
      rating: 4.5,
      comment: 'The personalized attention has made a huge difference in my learning. I feel more confident approaching difficult topics now.'
    }
  ];

  // Handle mouse down event for drag scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - reviewsRef.current.offsetLeft);
    setScrollLeft(reviewsRef.current.scrollLeft);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle mouse move event for drag scrolling
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - reviewsRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    reviewsRef.current.scrollLeft = scrollLeft - walk;
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star full">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">★</span>);
      }
    }

    return stars;
  };

  return (
    <div className="reviews-section">
      <h2>Student Reviews</h2>
      
      <div 
        className="reviews-container"
        ref={reviewsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="avatar">
                <span>{review.initials}</span>
              </div>
              <div className="reviewer-info">
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </div>
            <div className="rating">
              {renderStars(review.rating)}
            </div>
            <p className="review-text">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentReviews;