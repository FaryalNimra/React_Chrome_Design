import React from 'react';
import WindowControls from './WindowControls';
import './TabBar.css';

const TabBar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tab-bar">
      <div className="tab-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <div className="tab-content">
              <span className="tab-favicon">{tab.favicon}</span>
              <span className="tab-title">{tab.title}</span>
              <button className="tab-close" onClick={(e) => {
                e.stopPropagation();
                // Handle tab close logic here
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
        <div className="new-tab-button">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div className="tab-bar-controls">
        <WindowControls />
      </div>
    </div>
  );
};

export default TabBar;
