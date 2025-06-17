import React from "react";
import "./HeroSection.css";
import CountdownTimer from "../CountdownTimer";

function HeroSection() {
  return (
    <div className="hero-section" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Gill & Keegan</h1>
        <p className="hero-date">July 23rd, 2026</p>
        <CountdownTimer />
      </div>
    </div>
  );
}

export default HeroSection;