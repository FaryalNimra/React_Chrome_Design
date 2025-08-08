import React, { useState } from 'react';
import WindowControls from './WindowControls';
import TabBar from './TabBar';
import AddressBar from './AddressBar';
import './ChromeWindow.css';

const ChromeWindow = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: 'GitHub', url: 'https://github.com', favicon: '🐙' }
  ];

  return (
    <div className="chrome-window">
      {/* Window Title Bar */}
      <div className="window-title-bar">
        <div className="window-title">
          <span className="chrome-icon">●</span>
          GitHub
        </div>
      </div>
      
      {/* Chrome Top Bar */}
      <div className="chrome-top-bar">
        <TabBar 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        <AddressBar url={tabs[activeTab]?.url || 'https://github.com'} />
      </div>
      
      {/* Content Area */}
      <div className="content-area">
        <div className="new-tab-content">
          <div className="google-logo">
            <span className="google-text">Google</span>
          </div>
          <div className="search-container">
            <div className="search-box">
              <div className="search-icon">🔍</div>
              <input 
                type="text" 
                placeholder="Search Google or type a URL"
                className="search-input"
              />
              <div className="search-actions">
                <button className="mic-button">🎤</button>
                <button className="ai-button">✨</button>
              </div>
            </div>
          </div>
          <div className="shortcuts-container">
            <div className="shortcut-item">
              <div className="shortcut-icon pink">C</div>
              <span className="shortcut-title">CreepiS</span>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-icon purple">v</div>
              <span className="shortcut-title">v0</span>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-icon grey">⚙</div>
              <span className="shortcut-title">Techlife</span>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-icon rainbow">W</div>
              <span className="shortcut-title">Web Store</span>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-icon yellow">+</div>
              <span className="shortcut-title">Add shortcut</span>
            </div>
          </div>
          <div className="customize-button">
            <span className="customize-icon">✏</span>
            Customize Chrome
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChromeWindow;
