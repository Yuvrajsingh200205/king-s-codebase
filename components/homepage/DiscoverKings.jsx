"use client";

import { useInView } from "react-intersection-observer";
import "../../styles/components/homepage/DiscoverKings.css";

const DiscoverKings = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const sections = [
    {
      title: "THE PELICAN DIFFERENCE",
      subtitle: "2-4 Years",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/pelican-nursery-40-e1743675082517-660x0-c-center.jpg",
      alt: "Young child exploring outdoors",
    },
    {
      title: "THE PRE-PREP DIFFERENCE",
      subtitle: "4-7 Years",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-pre-prep-17-660x0-c-center.jpg",
      alt: "Young student at wooden playground structure",
    },
    {
      title: "THE PREP DIFFERENCE",
      subtitle: "7-13 Years",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-prep-18-660x0-c-center.jpg",
      alt: "Students reading together in classroom",
    },
    {
      title: "THE SENIOR DIFFERENCE",
      subtitle: "13-16 Years",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/Kings-Taunton-2024-09-13-3237_websize-1-660x0-c-center.jpg",
      alt: "Senior students in school corridor",
    },
    {
      title: "THE SIXTH FORM DIFFERENCE",
      subtitle: "16-18 Years",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kings-college-taunton-sixth-form-5-660x0-c-center.jpg",
      alt: "Sixth form students outside modern building",
    },
    {
      title: "ADMISSIONS",
      subtitle: "Welcome",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/pelican-nursery-10-660x0-c-center.jpg",
      alt: "Students interacting outdoors",
    },
  ];

  return (
    <div className="discover-kings">
      <div
        ref={ref}
        className={`discover-header ${inView ? "fade-in" : "fade-out"}`}
      >
        <h1>DISCOVER KING'S</h1>
      </div>

      <div className={`sections-grid ${inView ? "fade-in" : "fade-out"}`}>
        {sections.map((section, index) => (
          <SectionCard
            key={index}
            section={section}
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

const SectionCard = ({ section, index, inView }) => {
  return (
    <div
      className={`section-card ${inView ? "fade-in" : "fade-out"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="image-container">
        <img src={section.image} alt={section.alt} loading="lazy" />
        <div className="overlay"></div>
      </div>

      <div className="content">
        <h2>{section.title}</h2>
        <p>{section.subtitle}</p>
        <div className="arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DiscoverKings;
