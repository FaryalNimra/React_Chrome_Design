import React from 'react';
import './WindowControls.css';

const WindowControls = () => {
  return (
    <div className="window-controls">
      <button className="window-control minimize" title="Minimize">
        <svg width="10" height="1" viewBox="0 0 10 1">
          <rect width="10" height="1" fill="currentColor"/>
        </svg>
      </button>
      <button className="window-control maximize" title="Maximize">
        <svg width="10" height="10" viewBox="0 0 10 10">
          <rect width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </button>
      <button className="window-control close" title="Close">
        <svg width="10" height="10" viewBox="0 0 10 10">
          <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default WindowControls;
