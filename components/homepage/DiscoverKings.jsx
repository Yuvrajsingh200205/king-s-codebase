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
      title: "KING'S COLLEGE TAUNTON",
      subtitle: "United Kingdom",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/pelican-nursery-40-e1743675082517-660x0-c-center.jpg",
      alt: "King's College Taunton campus",
    },
    {
      title: "KING'S COLLEGE DOHA",
      subtitle: "Qatar",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-pre-prep-17-660x0-c-center.jpg",
      alt: "King's College Doha campus",
    },
    {
      title: "KING'S COLLEGE RIYADH",
      subtitle: "Saudi Arabia",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-prep-18-660x0-c-center.jpg",
      alt: "King's College Riyadh campus",
    },
    {
      title: "KING'S COLLEGE GURUGRAM",
      subtitle: "India",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/Kings-Taunton-2024-09-13-3237_websize-1-660x0-c-center.jpg",
      alt: "King's College Gurugram campus",
    },
    {
      title: "FUTURE PROJECTS",
      subtitle: "Asia & Far East",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kings-college-taunton-sixth-form-5-660x0-c-center.jpg",
      alt: "Future expansion projects",
    },
    {
      title: "GLOBAL PARTNERSHIPS",
      subtitle: "Join Our Network",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/pelican-nursery-10-660x0-c-center.jpg",
      alt: "Partnership opportunities",
    },
  ];

  return (
    <div className="discover-kings">
      <div
        ref={ref}
        className={`discover-header ${inView ? "fade-in" : "fade-out"}`}
      >
        <h1>DISCOVER OUR GLOBAL NETWORK</h1>
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
        <div className="text-with-arrow">
          <div className="text">
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>
          </div>
          <div className="arrow">
            <img
              src="https://www.kings-taunton.co.uk/wp-content/themes/kings-taunton/dist/assets/img/right-arrow-gold.svg"
              alt="Arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverKings;
