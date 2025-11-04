
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Simplify Your Customer Support</h1>
        <p>Fast, reliable, and easy-to-use ticket management.</p>
        <button className="cta-btn">Get Started</button>
      </div>

      {/* Decorative Circle */}
      <div className="decorative-circle"></div>

      {/* Wavy background */}
      <svg
        className="hero-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#4f46e5"
          fillOpacity="1"
          d="M0,96L80,112C160,128,320,160,480,181.3C640,203,800,213,960,192C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default HeroSection;

