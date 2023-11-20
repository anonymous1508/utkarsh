// About.js

import React from 'react';

function About() {
  const aboutStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    transition: 'transform 0.3s, box-shadow 0.3s', // Add transition for smoother effects
    cursor: 'pointer',
  };

  const headingStyle = {
    fontSize: '2em',
    color: '#333333',
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

  const handleHover = () => {
    // Adjust styles on hover
    aboutStyle.transform = 'scale(1.02)';
    headingStyle.color = '#e74c3c'; // Change text color on hover
    aboutStyle.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)'; // Add a subtle box shadow on hover
  };

  const handleHoverLeave = () => {
    // Reset styles on hover leave
    aboutStyle.transform = 'scale(1)';
    headingStyle.color = '#333333';
    aboutStyle.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  };

  return (
    <div
      id="about"
      style={aboutStyle}
      onMouseOver={handleHover}
      onMouseLeave={handleHoverLeave}
    >
      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>
        Hi, I'm Utkarsh Singhal, a passionate and results-driven software developer. Proficient in coding and problem-solving, I specialize in Data Structures and Algorithms (DSA) with a keen interest in web development. I bring a strong work ethic, attention to detail, and the ability to lead and collaborate effectively in a team environment.
      </p>
    </div>
  );
}

export default About;
