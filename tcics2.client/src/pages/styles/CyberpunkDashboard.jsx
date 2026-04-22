import { useState } from "react";
import "./Dashboard.css";

export default function CyberpunkDashboard() {
  return (
    <div className="cyber-wrapper">
      {/* CYBERPUNK BACKGROUND LAYERS */}
      <div className="cyber-bg" />
      <div className="cyber-grid" />
      <div className="cyber-scanlines" />

      <div className="content-layer">
        {/* NAVBAR */}
        <nav className="cyber-navbar">
          <h5 className="cyber-logo">
            <span className="glitch" data-text="TCICS">TCICS</span>
            <span className="subtitle">_LEARNING</span>
          </h5>

          <div className="search-container">
            <input className="cyber-search" placeholder="SEARCH THE MATRIX..." />
          </div>

          <div className="nav-actions">
            <a className="nav-link" href="#">MY LEARNING</a>
            <button className="cyber-btn primary">LOGIN</button>
            <button className="cyber-btn secondary">SIGN UP</button>
          </div>
        </nav>

        {/* HERO */}
        <div className="hero-section">
          <h1 className="hero-title">
            LEARNING THAT <span className="glow-text">GETS YOU</span>
          </h1>
        </div>
      </div>
    </div>
  );
}