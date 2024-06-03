// src/App.js
import React, { useState } from 'react';
import TopBar from './components/TopBar';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import styles from './App.module.css';
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
        <div className={styles.bannerText}>
          <img src="kaspa_logo_nacho.png" alt="Nacho the 𐤊at Logo" width={150} height={150} className={styles.logo} />
          <h1 className={styles.title}>
            Nacho the 𐤊at
          </h1>
          <p>
            <span className={styles.highlight}>Join our community</span>, in making <span className={styles.highlight}>Nacho the 𐤊at</span> the perfect example of fairness and the true spirit of <span className={styles.highlight}>Kaspa and KRC20!</span>
          </p>
        </div>
      </div>
      <div className={styles.mainFeatures}>
        <p>
          Fair Launch &nbsp;   |&nbsp;    No Presale&nbsp;    | &nbsp;  No Pre-Allocation &nbsp;  | &nbsp; Community Driven&nbsp;   | &nbsp;  Kaspa KRC20 Standards
        </p>  
      </div>
      <div className={styles.featuresSection}>
        <div className={styles.featuresText}>
          <h2>Launch Conditions</h2>
          <ul>
            <li><span className={styles.highlight}>Community Driven:</span> Our decisions are based on community discussions. Join our Discord to be part of it.</li>
            <li><span className={styles.highlight}>Fair Launch:</span> No team member gets tokens in advance. Everyone can mint their tokens according to the KRC20 standard, ensuring equal opportunities for all.</li>
            <li><span className={styles.highlight}>Transparent Tokenomics:</span> Maximum supply and other details are being discussed as a community in Discord. Join us!   <span className={styles.highlight2}><a href="/Nacho_the_at_Whitepaper_Draft_2.pdf" target="_blank" rel="noopener noreferrer">[whitepaper]</a></span> </li>
          </ul>
        </div>
      </div>
      <div className="middle-section">
      <div className={styles.faqSection}>
      <h2>❓ What is KRC-20?</h2>
      <p>KRC-20 is a token standard on the Kaspa network. It defines the rules and conventions for creating and managing fungible tokens, similar to the ERC-20 standard on Ethereum. This standard ensures that all tokens created on the Kaspa network are interoperable and can be used within the ecosystem seamlessly.</p>

      <h2>💰 When and how can I buy Nacho?</h2>
      <p>We are waiting for KRC-20 to be launched to provide a date. Nacho will be minted. You will need to mint your tokens.</p>
      </div>
        <button className="toggle-button" onClick={toggleCollapse}>
          {collapsed ? 'Show More Questions and Answers' : 'Show Less'}
        </button>
        {!collapsed && (
      <div className={styles.faqSection}>

      <h2>🪙 What does mint mean?</h2>
      <p>When a token is minted, it is generated and added to the total supply, making it available for use within the Kaspa ecosystem. The token will be available to mint on a platform being developed by KRC-20 community.</p>

      <h2>🎁 Will Nacho offer airdrops?</h2>
      <p>No. Fair launch won&apos;t make it possible.</p>

      <h2>❓ What is Kasplex?</h2>
      <p>Kasplex is designed as a versatile solution, incorporating the data insertion protocol, an open-source indexer, data availability, and comprehensive APIs. It leverages Kaspa&apos;s high block rate, scalability, and decentralized POW Layer-1 to facilitate efficient data insertion, address the UTXO bloat issue, and support a sustainable ecosystem.</p>
      <p>Kasplex provides an open-source indexer that enables developers and users to effectively retrieve and check data associated with KRC-20 tokens, NFTs, and other digital assets on Kaspa.</p>
      <p>Kasplex introduces the KRC-20 token standard, which defines a set of rules and conventions for creating and managing fungible tokens on Kaspa. (<a href="https://www.kasplex.org/home" target="_blank" rel="noopener noreferrer">https://www.kasplex.org/home</a>)</p>

      <h2>🚀 Will Nacho have a presale?</h2>
      <p>Nacho will be fair launch. A fair launch ensures equal opportunity for all to acquire tokens without pre-sales or preferential treatment, fostering trust and transparency in the community.</p>

      <h2>💼 Where can I store Nacho?</h2>
      <p>Once the KRC20 standard is live on the Kaspa Mainnet, wallet providers are highly likely to update their wallets to support KRC20. The only wallet known to be working on supporting KRC20 at the time of launch is Kasware - <a href="https://www.kasware.xyz/" target="_blank" rel="noopener noreferrer">https://www.kasware.xyz/</a></p>

      <h2>⛏️ Can I mine Nacho?</h2>
      <p>Based on our understanding, KRC20 tokens are not mineable, including Nacho.</p>

      <h2>💵 How much will Nacho cost?</h2>
      <p>To be determined. Based on the Kasplex whitepaper, each mint of new KRC20 Tokens will require a gas fee of 1 KAS that will be paid to miners. Nacho will allow for batch mints of 287,000 Nacho tokens per mint. This is subject to change prior to finalization of the whitepaper.</p>

      <h2>🔄 What will be the DEX for Nacho?</h2>
      <p>To be determined. Once the KRC20 standard is live on the Kaspa Mainnet, it is highly likely we will see a DEX built and deployed. We will need to wait and see.</p>

      <h2>🤝 Does Nacho receive donations?</h2>
      <img src="donation_wallet.png" alt="Nacho the 𐤊at Donation wallet" width={300} height={300}/>
    </div>
        )}
      </div>            
      <div className="bottom-section">
        <div className="column">
          <img src="/kaspa_logo_nacho.png" alt="Nacho the 𐤊at Logo" width={80} height={80} className={styles.logo} />
          <br/>Nacho the 𐤊at
        </div>
        <div className="column">
        <div className="centered-content">
            <div className="social-links">
            &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://discord.gg/EB8VvA9DVf" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
              <a href="https://t.me/nachothecat" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane />
              </a>
              <a href="https://x.com/NachoWyborski" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
            <a href="/Nacho_the_at_Whitepaper_Draft_2.pdf" className="whitepaper-link" target="_blank" rel="noopener noreferrer">
              [ whitepaper ]
            </a>
          </div>
        </div>
        <div className="columnDisclaimer">
          <p>This project is community-driven, and there is no legal or official representation. The information provided here does not constitute financial advice, and we do not recommend this project as an investment. We are not affiliated with any company or group, including KRC20, Kaspa, and Kasplex. We are not in control of or responsible for any changes to KRC20 standards or the unavailability of any app or tool to mint, swap, or perform any operation that may affect this initiative.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
