import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import FadeInAnimation from '../animations/FadeInAnimation';
import '../../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Text-Utils',
      description: 'TextUtils is a React-based web application that offers a range of text manipulation tools such as converting text to uppercase or lowercase, removing extra spaces, copying text, and providing word and character counts.It\'s designed with a simple, responsive interface for quick and efficient use.',
      technologies: ['React.js', 'Algorithms'],
      points: [
        'Developed a responsive and user-friendly interface for real-time text transformations using React and state management.',
        'Implemented efficient string manipulation features with instant feedback, enhancing user experience without page reloads.'
      ],
      date: 'March 2025',
      github: 'https://github.com/ds-ashif/TextUtils-React_App',
      demo: 'https://ds-ashif.github.io/TextUtils-React_App/'
    },
    {
      title: 'Weather Dashboard',
      description: 'Weather Dashboard is a sleek and responsive web app that provides real-time weather updates for any city using live API data. It displays temperature, humidity, wind speed, and weather conditions with a clean, user-friendly interface.',
      technologies: ['React.js', 'Redux'],
      points: [
        'Integrated real-time weather data using OpenWeatherMap API to display accurate forecasts and current conditions for any city.',
        'Designed a clean, responsive UI with intuitive search functionality and dynamic updates based on user input.'
      ],
      date: 'April 2025',
      github: 'https://github.com/ds-ashif/weather-Dashboard/',
      demo: 'https://ds-ashif.github.io/weather-Dashboard/'
    },
    {
      title: 'N-Queen Visualizer',
      description: 'I have created visualizer of a challenging problem N-Queens which fixes the queens to right position so that it will not break the rule of chess.',
      technologies: ['C++', 'Terminal-Configuration'],
      points: [
        'Built an interactive visualization tool to demonstrate the backtracking algorithm used in solving the N-Queen problem.',
        'Enabled step-by-step visual feedback, allowing users to observe how queens are safely placed on the board in real-time.'
      ],
      date: 'August 2024',
      github: 'https://github.com/ds-ashif/N-Queen-Visualizer',
      demo: 'https://github.com/ds-ashif/N-Queen-Visualizer'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <FadeInAnimation>
          <h2 className="section-title">Projects</h2>
        </FadeInAnimation>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <FadeInAnimation 
              key={index} 
              direction={index % 2 === 0 ? 'up' : 'down'} 
              delay={0.2 * index}
            >
              <div className="project-card shine-element">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-date">{project.date}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <ul className="project-points">
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> {project.demo.includes('netlify.app') ? 'Live Demo' : 'View Project'}
                    </a>
                  </div>
                </div>
              </div>
            </FadeInAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 