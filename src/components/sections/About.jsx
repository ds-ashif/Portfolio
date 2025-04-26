import React from 'react';
import FadeInAnimation from '../animations/FadeInAnimation';
import FloatingAnimation from '../animations/FloatingAnimation';
import { FaLaptopCode, FaGraduationCap, FaFlask } from 'react-icons/fa';
import '../../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <FadeInAnimation>
          <h2 className="section-title">About Me</h2>
        </FadeInAnimation>
        
        <div className="about-content">
          <FadeInAnimation direction="right" delay={0.2}>
            <div className="about-image-container">
              <FloatingAnimation amplitude={10} duration={4}>
                <div className="about-image-wrapper">
                  <img src="/avatar1.avif" alt="Mohd Arshil Azim" className="about-image" />
                </div>
              </FloatingAnimation>
            </div>
          </FadeInAnimation>
          
          <div className="about-info">
            <div className="about-text">
              <FadeInAnimation direction="left" delay={0.3}>
                <div className="about-paragraph">
                  <div className="paragraph-icon">
                    <FaLaptopCode />
                  </div>
                  <p>
                      I'm a <span className="highlight">B.Tech Computer Science</span> student with a deep interest in creative software engineering. 
                      I specialize in <span className="highlight">React.js</span>, <span className="highlight">JavaScript</span>, and <span className="highlight">C++</span>, 
                      and have a strong grasp of algorithms and data structures. This solid technical base allows me to develop efficient and smart solutions 
                      to challenging coding problems.
                  </p>

                </div>
              </FadeInAnimation>
              
              <FadeInAnimation direction="left" delay={0.5}>
                <div className="about-paragraph">
                  <div className="paragraph-icon">
                    <FaFlask />
                  </div>
                  <p>
                    My development experience spans a variety of hands-on projects including 
                    <span className="highlight">Text-Utils</span>, a tool focused on efficient text manipulation; 
                    <span className="highlight">Phone-Mart</span>, an e-commerce platform tailored for mobile devices; and 
                    the <span className="highlight">N-Queen Visualizer</span>, which demonstrates the backtracking algorithm through an interactive interface. 
                    I’m passionate about crafting smooth user experiences while emphasizing performance, scalability, and clean, modular code. 
                    Each project has challenged me to think creatively and deliver practical, well-engineered solutions.
                  </p>

                </div>
              </FadeInAnimation>
              
              <FadeInAnimation direction="left" delay={0.7}>
                <div className="about-paragraph">
                  <div className="paragraph-icon">
                    <FaGraduationCap />
                  </div>
                  <p>
                    Currently pursuing a <span className="highlight">Bachelor of Technology in Computer Science</span> at 
                    <span className="highlight">Lovely Professional University</span>, I strive to combine strong academic foundations with real-world application. 
                    I am an <span className="highlight">adaptable</span> learner, an <span className="highlight">enthusiast for emerging technologies</span>, 
                    and a keen <span className="highlight">observer</span> who pays close attention to detail. I enjoy exploring areas like 
                    <span className="highlight">web development</span>, <span className="highlight">artificial intelligence</span>, and 
                    <span className="highlight">cloud computing</span>. With a mindset geared toward growth and innovation, I aim to build solutions 
                    that are not only technically sound but also impactful and user-focused.
                  </p>

                </div>
              </FadeInAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 