import React, { useEffect, useRef, useState } from 'react';
import '../../styles/animations.css';

const ParallaxEffect = ({ children, speed = 0.2, direction = 'vertical' }) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const elementTop = elementRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight && elementTop > -windowHeight) {
        const scrollOffset = window.pageYOffset;
        setOffset(scrollOffset * speed);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  const getTransform = () => {
    if (direction === 'horizontal') {
      return { transform: `translateX(${offset}px)` };
    }
    return { transform: `translateY(${offset}px)` };
  };
  
  return (
    <div 
      ref={elementRef}
      className="parallax-element"
      style={getTransform()}
    >
      {children}
    </div>
  );
};

export default ParallaxEffect; 