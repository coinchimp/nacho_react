// src/App.js
import React, { useState } from 'react';
import TopBar from './components/TopBar';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="App">
      <TopBar />
      <div className="hero-section">
        <div>
          <h1>Welcome to My Website</h1>
          <p>This is a sample text over a background image.</p>
        </div>
      </div>
      <div className="middle-section">
        <button onClick={toggleCollapse}>
          {collapsed ? 'Show More' : 'Show Less'}
        </button>
        {!collapsed && (
          <div>
            <p>This is the collapsed text that can be shown or hidden.</p>
          </div>
        )}
      </div>
      <div className="bottom-section">
        <div className="social-links">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <p>© 2024 My Website. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
