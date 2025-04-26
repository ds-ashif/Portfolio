import React from 'react';
import '../../styles/animations.css';

const FloatingAnimation = ({ 
  children, 
  duration = 3, 
  delay = 0, 
  amplitude = 15, 
  direction = 'y',
  className = ''
}) => {
  const getAnimationStyle = () => {
    const animationName = direction === 'x' ? 'floatX' : 'floatY';
    
    return {
      animation: `${animationName} ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      '--amplitude': `${amplitude}px`
    };
  };

  return (
    <div className={`floating-element ${className}`} style={getAnimationStyle()}>
      {children}
    </div>
  );
};

export default FloatingAnimation; 