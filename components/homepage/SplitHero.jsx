"use client";

import { useState, useRef } from "react";
import "../../styles/components/homepage/SplitHero.css";

export default function SplitHero() {
  const [hovered, setHovered] = useState(null);

  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);

  const handlePlay = (side) => {
    const video =
      side === "left" ? leftVideoRef.current : rightVideoRef.current;
    if (video) video.play();
  };

  const handlePause = (side) => {
    const video =
      side === "left" ? leftVideoRef.current : rightVideoRef.current;
    if (video) video.pause();
  };

  return (
    <section className="split-hero">
      {/* Left Section */}
      <div
        className={`split-hero__panel left ${
          hovered === "left"
            ? "expanded"
            : hovered === "right"
            ? "collapsed"
            : ""
        }`}
        onMouseEnter={() => {
          setHovered("left");
          handlePlay("left");
        }}
        onMouseLeave={() => {
          setHovered(null);
          handlePause("left");
        }}
      >
        <video
          ref={leftVideoRef}
          className="split-hero__video"
          poster="https://www.kings-taunton.co.uk/wp-content/uploads/2025/04/kct-encouraging-courage-2-1600x0-c-center.webp"
          muted
          loop
          playsInline
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/download/1073235052/rendition/1080p/kings_college_-_encourage%20%281080p%29.mp4"
            type="video/mp4"
          />
        </video>

        {/* Play button always rendered, only visible when expanded */}
        <button className="video-play-btn" onClick={() => handlePlay("left")}>
          <img
            src="https://www.kings-taunton.co.uk/wp-content/themes/kings-taunton/dist/assets/img/play-icon-gold.svg"
            alt="Play"
          />
        </button>

        <div className="split-hero__overlay">
          <h2>ENCOURAGE</h2>
          <div className="split-hero__extra">
            <p>
              Encouraging more curiosity, teamwork, excellence, endeavour and
              risk-taking...
            </p>
            <button className="discover-btn">DISCOVER MORE →</button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`split-hero__panel right ${
          hovered === "right"
            ? "expanded"
            : hovered === "left"
            ? "collapsed"
            : ""
        }`}
        onMouseEnter={() => {
          setHovered("right");
          handlePlay("right");
        }}
        onMouseLeave={() => {
          setHovered(null);
          handlePause("right");
        }}
      >
        <video
          ref={rightVideoRef}
          className="split-hero__video"
          poster="https://www.kings-taunton.co.uk/wp-content/uploads/2025/04/kct-encouraging-courage-1-1600x0-c-center.webp"
          muted
          loop
          playsInline
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/download/1073234377/rendition/1080p/kings_college_-_courage%20%281080p%29.mp4"
            type="video/mp4"
          />
        </video>

        <button className="video-play-btn" onClick={() => handlePlay("right")}>
          <img
            src="https://www.kings-taunton.co.uk/wp-content/themes/kings-taunton/dist/assets/img/play-icon-gold.svg"
            alt="Play"
          />
        </button>

        <div className="split-hero__overlay">
          <h2>COURAGE</h2>
          <div className="split-hero__extra">
            <p>
              Developing confidence, resilience, leadership and the ability to
              stand tall...
            </p>
            <button className="discover-btn">DISCOVER MORE →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
