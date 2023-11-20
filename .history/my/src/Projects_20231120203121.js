// Projects.js

import React from 'react';

function Projects() {
  const projectsStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  };

  const headingStyle = {
    fontSize: '2em',
    color: '#333333',
    borderBottom: '2px solid #3498db',
    paddingBottom: '10px',
    marginBottom: '20px',
  };

  const projectContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  };

  const projectTitleStyle = {
    fontSize: '1.5em',
    color: '#333333',
    marginBottom: '10px',
  };

  const projectDescriptionStyle = {
    fontSize: '1.2em',
    color: '#555555',
    marginBottom: '10px',
  };

  const projectLinksStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  };

  const projectImageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div id="projects" style={projectsStyle}>
      <h2 style={headingStyle}>Projects</h2>

      <div style={projectContainerStyle}>
      <a href="https://github.com/Utkarshjavy/Codsofttasks/tree/main/weather%20website"> <h3 style={projectTitleStyle}>Weather App</h3></a>s
        <p style={projectDescriptionStyle}>
          A responsive weather application that provides real-time weather updates. Stay informed about the current conditions anywhere in the world.
        </p>
        <div style={projectLinksStyle}>
          {/* Add project links here */}
        </div>
        {/* Add an image for the Weather App */}
        <img
          src="weather-app-image.jpg"  // Add the actual image source
          alt="Weather App"
          style={projectImageStyle}
        />
      </div>

      <div style={projectContainerStyle}>
        <a href='https://github.com/Utkarshjavy/Codsofttasks/tree/main/Coffeeshop2'><h3 style={projectTitleStyle}>Starbucks Clone</h3></a>
        <p style={projectDescriptionStyle}>
          A responsive Starbucks website clone with a focus on replicating the user interface. Order your favorite drinks and explore the menu.
        </p>
        <div style={projectLinksStyle}>
          {/* Add project links here */}
        </div>
        {/* Add an image for the Starbucks Clone */}
        <img
          src="starbucks-clone-image.jpg"  // Add the actual image source
          alt="Starbucks Clone"
          style={projectImageStyle}
        />
      </div>
    </div>
  );
}

export default Projects;
