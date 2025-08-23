"use client";

import { useInView } from "react-intersection-observer";
import "../../styles/components/homepage/BannerSection.css";

export default function BannerSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false, 
  });

  return (
    <section
      className="banner-section"
      style={{
        backgroundImage:
          "url('https://www.kings-taunton.co.uk/wp-content/uploads/2025/04/kct-about-facilities-hero-1-scaled-2880x0-c-center.webp')",
      }}
    >
      <div
        ref={ref}
        className={`banner-content ${inView ? "fade-in" : "fade-out"}`}
      >
        <h2>ONE SCHOOL, TWO WONDERFUL SITES</h2>
        <button className="banner-btn">
          FACILITIES <span>→</span>
        </button>
      </div>
    </section>
  );
}
