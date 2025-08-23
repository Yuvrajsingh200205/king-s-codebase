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
      date: "21 August 2025",
      title: "KING'S PUPILS CELEBRATE TOP GCSE RESULTS",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/pelican-nursery-40-e1743675082517-660x0-c-center.jpg",
      alt: "Students celebrating GCSE results",
    },
    {
      date: "14 August 2025",
      title: "PUPILS CELEBRATE OUTSTANDING 2025 A LEVEL AND BTEC RESULTS",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-pre-prep-17-660x0-c-center.jpg",
      alt: "Students celebrating A Level results",
    },
    {
      date: "6 August 2025",
      title: "CLASSROOM IN THE TREE TOPS COMING SOON TO PELICAN NURSERY",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-prep-18-660x0-c-center.jpg",
      alt: "Tree house classroom design",
    },
    {
      date: "4 August 2025",
      title: "AN UNFORGETTABLE TRIP TO OKEHAMPTON",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/Kings-Taunton-2024-09-13-3237_websize-1-660x0-c-center.jpg",
      alt: "Students on trip to Okehampton",
    },
    {
      date: "1 August 2025",
      title: "BRODIE SELECTED FOR HOCKEY ENGLAND",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kings-college-taunton-sixth-form-5-660x0-c-center.jpg",
      alt: "Student selected for hockey team",
    },
  ];

  const itemsPerView = 4;
  const totalItems = newsItems.length;

  // Calculate the maximum number of steps needed to show the last item fully
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Improved disabled state logic
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
        <h1>NEWS</h1>
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
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
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
