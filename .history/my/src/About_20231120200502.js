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
        Hello, I'm [Your Name]. I am a [Your Role] with a passion for
        [Your Interests]. I love to [something about yourself].
      </p>
    </div>
  );
}

export default About;
