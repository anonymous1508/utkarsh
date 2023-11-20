// LandingPage.js

import React from 'react';

function LandingPage() {
  const landingPageStyle = {
    background: 'linear-gradient(to bottom, #3498db, #2980b9)',
    color: '#ffffff',
    padding: '60px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5em',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
  };

  return (
    <div id="landing" style={landingPageStyle}>
      <h2 style={headingStyle}>Welcome to My Portfolio</h2>
      <p style={paragraphStyle}>Hi, I'm Utkarsh Singhal, a passionate developer.</p>
    </div>
  );
}

export default LandingPage;

