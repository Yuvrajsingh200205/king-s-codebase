"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import "../../styles/components/homepage/NewSection.css";

const NewsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const newsItems = [
    {
      date: "Global Expansion",
      title: "KING'S COLLEGE INTERNATIONAL EXPANDS TO FOUR CONTINENTS",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/pelican-nursery-40-e1743675082517-660x0-c-center.jpg",
      alt: "Global expansion across continents",
    },
    {
      date: "Strategic Partnership",
      title: "PARTNERSHIP WITH GEV DUBAI STRENGTHENS ASIA-PACIFIC PRESENCE",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-pre-prep-17-660x0-c-center.jpg",
      alt: "Strategic partnership announcement",
    },
    {
      date: "New Campus",
      title: "KING'S COLLEGE GURUGRAM OPENS WITH STATE-OF-THE-ART FACILITIES",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-prep-18-660x0-c-center.jpg",
      alt: "New Gurugram campus opening",
    },
    {
      date: "Future Projects",
      title: "UPCOMING CAMPUSES PLANNED FOR SOUTHEAST ASIA AND FAR EAST",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/Kings-Taunton-2024-09-13-3237_websize-1-660x0-c-center.jpg",
      alt: "Future campus development plans",
    },
    {
      date: "Career Opportunities",
      title: "JOIN OUR GLOBAL TEAM - EXCITING POSITIONS ACROSS ALL CAMPUSES",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kings-college-taunton-sixth-form-5-660x0-c-center.jpg",
      alt: "Career opportunities globally",
    },
  ];

  const itemsPerView = 4; // matches CSS flex-basis: 25%
  const totalItems = newsItems.length;

  // Calculate how many "pages" we can scroll
  const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Button disable logic
  const isPrevDisabled = currentIndex <= 0;
  const isNextDisabled = currentIndex >= maxIndex;

  const LeftArrowIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="arrow-icon"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const RightArrowIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="arrow-icon"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="news-section">
      <div
        ref={ref}
        className={`news-header ${inView ? "fade-in" : "fade-out"}`}
      >
        <h1>LATEST UPDATES</h1>
        <div className="navigation-controls">
          <button
            className="nav-button prev"
            onClick={goToPrevious}
            disabled={isPrevDisabled}
          >
            <LeftArrowIcon />
          </button>
          <button
            className="nav-button next"
            onClick={goToNext}
            disabled={isNextDisabled}
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>

      <div className={`news-carousel ${inView ? "fade-in" : "fade-out"}`}>
        <div
          className="news-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${(totalItems / itemsPerView) * 100}%`,
          }}
        >
          {newsItems.map((item, index) => (
            <NewsCard key={index} item={item} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({ item, index, inView }) => {
  return (
    <div
      className={`news-card ${inView ? "fade-in" : "fade-out"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="news-image-container">
        <img src={item.image} alt={item.alt} loading="lazy" />
      </div>

      <div className="news-content">
        <p className="news-date">{item.date}</p>
        <h3 className="news-title">{item.title}</h3>
      </div>
    </div>
  );
};

export default NewsSection;
