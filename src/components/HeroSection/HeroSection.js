import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import CountdownTimer from "../CountdownTimer";

const engagementPhotos = [
  "/assets/images/background/background1.jpeg",
  "/assets/images/background/background2.jpeg",
  "/assets/images/background/background3.jpeg",
  "/assets/images/background/background4.jpeg",
  "/assets/images/background/background5.jpeg",
];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % engagementPhotos.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section" id="hero">
      {engagementPhotos.map((photo, index) => (
        <div
          key={photo}
          className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${photo})` }}
        />
      ))}
      <div className="hero-content">
        <h1 className="hero-title">Gill & Keegan</h1>
        <p className="hero-date">July 23rd, 2026</p>
        <CountdownTimer />
      </div>
    </div>
  );
}

export default HeroSection;