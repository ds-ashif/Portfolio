import React, { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import '../../styles/animations.css';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const nodeRef = useRef(null);
  
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        timeout={300}
        classNames="page-transition"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PageTransition; 