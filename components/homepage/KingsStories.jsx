"use client";

import { useInView } from "react-intersection-observer";
import "../../styles/components/homepage/KingsStories.css";

const KingsStories = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const leaders = [
    {
      name: "JUSTIN CHIPPENDALE",
      role: "International Director",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/pelican-nursery-40-e1743675082517-660x0-c-center.jpg",
      alt: "Justin Chippendale - International Director",
    },
    {
      name: "MICHAEL SLOAN",
      role: "Executive Head",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-pre-prep-17-660x0-c-center.jpg",
      alt: "Michael Sloan - Executive Head",
    },
    {
      name: "GLOBAL EDUCATIONAL VENTURE",
      role: "Strategic Partner - Dubai",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-prep-18-660x0-c-center.jpg",
      alt: "GEV Dubai Partnership",
    },
    {
      name: "ACADEMIC EXCELLENCE",
      role: "140+ Years Heritage",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/Kings-Taunton-2024-09-13-3237_websize-1-660x0-c-center.jpg",
      alt: "Academic Excellence",
    },
    {
      name: "GLOBAL NETWORK",
      role: "Four Continents",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kings-college-taunton-sixth-form-5-660x0-c-center.jpg",
      alt: "Global Network",
    },
    {
      name: "FUTURE VISION",
      role: "Expanding Horizons",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/pelican-nursery-10-660x0-c-center.jpg",
      alt: "Future Vision",
    },
  ];

  const PlayIcon = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className="play-icon"
    >
      <circle cx="30" cy="30" r="30" fill="#D4AF37" opacity="0.9" />
      <polygon points="23,18 23,42 42,30" fill="white" />
    </svg>
  );

  return (
    <div className="kings-stories">
      <div
        ref={ref}
        className={`stories-header ${inView ? "fade-in" : "fade-out"}`}
      >
        <h1>LEADERSHIP & VISION</h1>
      </div>

      <div className={`stories-grid ${inView ? "fade-in" : "fade-out"}`}>
        {leaders.map((leader, index) => (
          <StoryCard
            key={index}
            story={leader}
            index={index}
            inView={inView}
            PlayIcon={PlayIcon}
          />
        ))}
      </div>
    </div>
  );
};

const StoryCard = ({ story, index, inView, PlayIcon }) => {
  return (
    <div
      className={`story-card ${inView ? "fade-in" : "fade-out"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="story-image-container">
        <img src={story.image} alt={story.alt} loading="lazy" />
        <div className="play-button-overlay">
          <PlayIcon />
        </div>
      </div>

      <div className="story-info">
        <h3>{story.name}</h3>
        <p>{story.role}</p>
      </div>
    </div>
  );
};

export default KingsStories;
