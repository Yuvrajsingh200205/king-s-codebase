"use client";

import { useEffect, useState } from "react";
import "../../styles/components/homepage/Hero.css";

export default function Hero() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);

    // Scroll trigger
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setShowDescription(true);
      } else {
        setShowDescription(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__title">
          <div
            className={`hero__title-line encourage ${
              isAnimated ? "animate-in" : ""
            }`}
          >
            <span className="text-light">ENCOURAGE</span>
          </div>
          <div
            className={`hero__title-line kings ${
              isAnimated ? "animate-in" : ""
            }`}
          >
            <span className="text-gold">KING'S</span>
          </div>
          <div
            className={`hero__title-line courage ${
              isAnimated ? "animate-in" : ""
            }`}
          >
            <span className="text-light">COURAGE</span>
          </div>
        </div>

        {/* Scroll-triggered text - matches your design */}
        <div
          className={`hero__description ${
            showDescription ? "visible" : ""
          }`}
        >
          <div className="hero__mission">
            <h2 className="hero__mission-title">Our Mission</h2>
            <p>
              King's College International shares the founding spirit of King's College UK 
              with its first campus set in 1880 in Taunton, UK: to inspire excellence in 
              education and to prepare young people to lead meaningful lives in a global society.
            </p>
            <p>
              Our mission is to extend this heritage of outstanding learning across the world—broadening 
              opportunities for students, fostering respect among cultures, and shaping leaders for tomorrow.
            </p>
          </div>
        </div>

        <div className="hero__cta">
          <div className="hero__cta-buttons">
            <button className="hero__cta-button">VISIT US</button>
            <button className="hero__cta-button">APPLY</button>
            <button className="hero__cta-button">CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  );
}
