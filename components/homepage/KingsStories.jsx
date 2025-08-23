"use client";

import { useInView } from "react-intersection-observer";
import "../../styles/components/homepage/KingsStories.css";

const KingsStories = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stories = [
    {
      name: "CHANNAH",
      role: "Prep Boarder",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/pelican-nursery-40-e1743675082517-660x0-c-center.jpg",
      alt: "Channah - Prep Boarder",
    },
    {
      name: "HUMPHREY",
      role: "Prep Pupil",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-pre-prep-17-660x0-c-center.jpg",
      alt: "Humphrey - Prep Pupil",
    },
    {
      name: "JASMINE",
      role: "Year 9 Day Pupil",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kct-prep-18-660x0-c-center.jpg",
      alt: "Jasmine - Year 9 Day Pupil",
    },
    {
      name: "HERBERT",
      role: "International Boarder",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/Kings-Taunton-2024-09-13-3237_websize-1-660x0-c-center.jpg",
      alt: "Herbert - International Boarder",
    },
    {
      name: "RÓISÍN",
      role: "Sixth Form Boarder",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/kings-college-taunton-sixth-form-5-660x0-c-center.jpg",
      alt: "Róisín - Sixth Form Boarder",
    },
    {
      name: "THOMAS",
      role: "Sixth Form Day Pupil",
      image:
        "https://www.kings-taunton.co.uk/wp-content/uploads/2025/03/pelican-nursery-10-660x0-c-center.jpg",
      alt: "Thomas - Sixth Form Day Pupil",
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
        <h1>KING'S STORIES</h1>
      </div>

      <div className={`stories-grid ${inView ? "fade-in" : "fade-out"}`}>
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            story={story}
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
