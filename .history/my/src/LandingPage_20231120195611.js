// LandingPage.js

import React from 'react';

function LandingPage() {
  const landingPageStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div id="landing" style={landingPageStyle}>
      <h2>Welcome to My Portfolio</h2>
      <p>Hi, I'm [Your Name], a passionate developer.</p>
    </div>
  );
}

export default LandingPage;
