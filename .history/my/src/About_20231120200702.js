// About.js

import React from 'react';

function About() {
  const aboutStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div id="about" style={aboutStyle}>
      <h2>About Me</h2>
      <p>
        Hi, I'm Utkarsh Singhal, a passionate and results-driven software developer. Proficient in coding and problem-solving, I specialize in Data Structures and Algorithms (DSA) with a keen interest in web development. I bring a strong work ethic, attention to detail, and the ability to lead and collaborate effectively in a team environment.
      </p>
    </div>
  );
}

export default About;
