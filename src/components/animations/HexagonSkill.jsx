import React from 'react';
import '../../styles/animations.css';

const HexagonSkill = ({ name, icon, color = '#4fb3bf' }) => {
  return (
    <div className="hexagon-skill" style={{ '--skill-color': color }}>
      <div className="hexagon-container">
        <div className="hexagon">
          <div className="hexagon-content">
            <div className="hexagon-icon">{icon}</div>
            <div className="hexagon-name">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexagonSkill; 