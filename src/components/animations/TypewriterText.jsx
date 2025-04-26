import React, { useState, useEffect } from 'react';
import '../../styles/animations.css';

const TypewriterText = ({
  text,
  speed = 100,
  delay = 0,
  cursor = true,
  onComplete = () => {},
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let timeout;
    
    if (delay > 0 && !started) {
      timeout = setTimeout(() => {
        setStarted(true);
      }, delay * 1000);
    } else {
      setStarted(true);
    }
    
    return () => clearTimeout(timeout);
  }, [delay, started]);

  useEffect(() => {
    if (!started) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [currentIndex, speed, text, started, onComplete]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayedText}
      {cursor && currentIndex < text.length && (
        <span className="typewriter-cursor">|</span>
      )}
    </span>
  );
};

export default TypewriterText; 