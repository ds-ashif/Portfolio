import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import TypewriterText from '../animations/TypewriterText';
import FadeInAnimation from '../animations/FadeInAnimation';
import FloatingAnimation from '../animations/FloatingAnimation';
import '../../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <FloatingAnimation amplitude={10} duration={4} direction="y">
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src="/avatar2.avif" alt="Ashif Ahamad" className="hero-image" />
            </div>
          </div>
        </FloatingAnimation>
        
        <div className="hero-content">
          <FadeInAnimation direction="down" delay={0.2}>
            <h1 className="hero-name">Ashif Ahamad</h1>
          </FadeInAnimation>
          
          <FadeInAnimation direction="down" delay={0.4}>
            <h2 className="hero-title">
              <TypewriterText
                text="Web Developer"
                speed={80}
                delay={0.8}
              />
            </h2>
          </FadeInAnimation>
          
          <FadeInAnimation direction="up" delay={0.6}>
            <p className="hero-description">
              Passionate developer with expertise in React, JavaScript, and C++.
              Building creative solutions for complex problems.
            </p>
          </FadeInAnimation>
          
          <FadeInAnimation direction="up" delay={0.8}>
            <div className="hero-cta">
              <Link to="/contact" className="cta-btn primary">
                Contact Me
              </Link>
              <Link to="/projects" className="cta-btn secondary">
                View Projects
              </Link>
              <a href="/ASHIF_AHAMAD_latest.pdf" className="cta-btn tertiary" target="_blank" rel="noopener noreferrer">
                <FaFileAlt className="btn-icon" /> Resume
              </a>
            </div>
          </FadeInAnimation>
          
          <FadeInAnimation direction="up" delay={1}>
            <div className="hero-social">
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
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
