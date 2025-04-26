import React, { useEffect, useRef, useState } from 'react';
import '../../styles/animations.css';

const FadeInAnimation = ({ children, direction = 'up', delay = 0, duration = 0.6, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold });
    
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);
  
  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'fade-in-up';
      case 'down': return 'fade-in-down';
      case 'left': return 'fade-in-left';
      case 'right': return 'fade-in-right';
      default: return 'fade-in-up';
    }
  };
  
  const animationStyle = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  };
  
  return (
    <div 
      ref={domRef}
      className={`fade-in-section ${getDirectionClass()} ${isVisible ? 'is-visible' : ''}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default FadeInAnimation; 