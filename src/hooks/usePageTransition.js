import { useState, useEffect } from 'react';

const usePageTransition = (delay = 300) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return { isVisible, className: isVisible ? 'fade-in visible' : 'fade-in' };
};

export default usePageTransition; 