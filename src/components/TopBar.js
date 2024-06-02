// src/components/TopBar.js
import React from 'react';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import './TopBar.css';
import nachoLogo from './kaspa_logo_nacho.png'; // Adjust the path to the actual location of the image


const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <img src={nachoLogo} alt="Nacho Logo" className="nacho-logo" />
        <h2>Nacho the 𐤊at</h2>
      </div>
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
    </div>
  );
};

export default TopBar;
