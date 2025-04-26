import React, { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/animations.css';

const PageTransition = ({ children, location, type = 'page-transition' }) => {
  const nodeRef = useRef(null);
  
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={type === 'page-transition' ? 500 : 300}
        classNames={type}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition; 