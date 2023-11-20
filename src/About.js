// About.js

// About.js

import React, { useState } from 'react';

function About() {
  const [isHovered, setIsHovered] = useState(false);

  const aboutStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: isHovered ? '0 0 20px rgba(0, 0, 0, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    transition: 'box-shadow 0.3s', // Add transition for smoother box shadow effect
    cursor: 'pointer',
  };

  const headingStyle = {
    fontSize: '2em',
    color: isHovered ? '#e74c3c' : '#333333',
    borderBottom: '2px solid #3498db',
    paddingBottom: '10px',
    marginBottom: '20px',
    transition: 'color 0.3s', // Add color transition on hover
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    lineHeight: '1.6',
    color: '#555555',
    marginTop: '15px',
  };

  return (
    <div
      id="about"
      style={aboutStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>
        Hi, I'm Utkarsh Singhal a passionate and results-driven software developer. Proficient in coding and problem-solving, I specialize in Data Structures and Algorithms (DSA) with a keen interest in web development. I bring a strong work ethic, attention to detail, and the ability to lead and collaborate effectively in a team environment.
      </p>
    </div>
  );
}

export default About;

