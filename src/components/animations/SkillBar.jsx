import React, { useState, useEffect, useRef } from 'react';
import '../../styles/animations.css';

const SkillBar = ({ name, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = barRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="skill-bar-container" ref={barRef}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        {isVisible && (
          <div 
            className="skill-progress" 
            style={{ 
              width: `${level}%`,
              animationDelay: `${delay}s`
            }} 
          />
        )}
      </div>
    </div>
  );
};

export default SkillBar; 