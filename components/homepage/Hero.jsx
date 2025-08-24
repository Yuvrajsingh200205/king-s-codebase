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

        {/* Scroll-triggered text */}
        <div
          className={`hero__description ${
            showDescription ? "visible" : ""
          } space-y-10`}
        >
          <p>
            We are a wonderfully ambitious co-educational independent school
            offering both day and boarding school places for pupils aged 2–18,
            in the heart of Somerset.
          </p>
          <p>We encourage. We are courageous.</p>
          <p>We are King’s.</p>
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
