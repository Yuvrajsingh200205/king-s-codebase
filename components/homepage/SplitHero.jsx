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
      {/* Left Section - Research & Innovation */}
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

        <button className="video-play-btn" onClick={() => handlePlay("left")}>
          <div className="play-icon">
            <div className="play-triangle"></div>
          </div>
        </button>

        <div className="split-hero__overlay">
          <h2 className="panel-title">
            <span className="title-main">Research,</span>
            <span className="title-accent">Innovation,</span>
            <span className="title-main">& Professional Growth</span>
          </h2>
          <div className="split-hero__extra">
            <p className="panel-description">
              At the heart of our educational philosophy is <span className="highlight">The King's College International</span>, 
              a hub for educational research, pedagogy innovations, professional learning, and best practices. All King's schools worldwide contribute to and benefit from this platform—sharing teaching practices, engaging in cross-cultural research projects, and enhancing professional development.
            </p>
          
            <button className="discover-btn">
              <span>DISCOVER MORE</span>
              <div className="btn-arrow">→</div>
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Global Education Festival */}
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
          <div className="play-icon">
            <div className="play-triangle"></div>
          </div>
        </button>

        <div className="split-hero__overlay">
          <h2 className="panel-title">
            <span className="title-main">Global</span>
            <span className="title-accent">Education</span>
            <span className="title-main">Festival</span>
          </h2>
          <div className="split-hero__extra">
            <p className="panel-description">
              We plan to celebrate education in its broadest sense. <span className="highlight">The King's Global 
              Education Festival (KGEF)</span> will become a platform where educators, thought-leaders, and students come together to debate, inspire, and innovate. With editions planned across the UK, India, the Middle East, Southeast Asia, and the Far East.
            </p>
  
            <button className="discover-btn">
              <span>DISCOVER MORE</span>
              <div className="btn-arrow">→</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
