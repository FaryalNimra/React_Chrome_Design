import React from 'react';
import './AddressBar.css';

const AddressBar = ({ url }) => {
  return (
    <div className="address-bar-container">
      <div className="navigation-controls">
        <button className="nav-button" title="Back" disabled>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M15 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="nav-button" title="Forward" disabled>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="nav-button" title="Refresh">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M17 3a9 9 0 00-9 9H1M3 7l4-4 4 4M3 17a9 9 0 009-9h7M17 13l-4 4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="address-bar">
        <input 
          type="text" 
          value={url} 
          readOnly
          className="url-input"
          placeholder="https://example.com"
        />
      </div>
      
      <div className="right-controls">
        <div className="top-links">
          <a href="#" className="top-link">Gmail</a>
          <a href="#" className="top-link">Images</a>
        </div>
        <div className="apps-button">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M3 3h4v4H3V3zm5 0h4v4H8V3zm5 0h4v4h-4V3zM3 8h4v4H3V8zm5 0h4v4H8V8zm5 0h4v4h-4V8zM3 13h4v4H3v-4zm5 0h4v4H8v-4zm5 0h4v4h-4v-4z" fill="currentColor"/>
          </svg>
        </div>
        <div className="profile-button">
          <div className="profile-avatar">U</div>
        </div>
        <div className="address-bar-actions">
          <button className="action-button" title="Security">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 1L2 4v3c0 4.4 3.6 8 8 8s8-3.6 8-8V4l-6-3z" fill="currentColor"/>
            </svg>
          </button>
          <button className="action-button" title="Bookmark this page">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M9 2l2.5 7.5L18 10l-6.5 5L9 15l-2.5 5L0 10l6.5-0.5L9 2z" fill="currentColor"/>
            </svg>
          </button>
          <button className="action-button" title="More">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <circle cx="9" cy="4.5" r="1.5" fill="currentColor"/>
              <circle cx="9" cy="9" r="1.5" fill="currentColor"/>
              <circle cx="9" cy="13.5" r="1.5" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressBar;
