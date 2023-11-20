// App.js

import React from 'react';
import LandingPage from './LandingPage';
import About from './About';


function App() {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    padding: '20px',
  };

  return (
    <div style={appStyle}>
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#landing">Home</a> | <a href="#projects">Projects</a> | <a href="#about">About</a>
        </nav>
      </header>

      <LandingPage />
      

      <footer>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
