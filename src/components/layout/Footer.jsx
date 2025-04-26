import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Ashif Ahamad</h3>
          <p>Bachelor of Technology in Computer Science</p>
          <p>Phagwara, Punjab</p>
        </div>
        <div className="footer-social">
          <a href="mailto:ahamad.ashif77@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/ashif-ahamad/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ds-ashif" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Ashif Ahamad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 