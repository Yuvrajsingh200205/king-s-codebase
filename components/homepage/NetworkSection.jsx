"use client";

import { useEffect, useState } from "react";
import "../../styles/components/homepage/NetworkSection.css";

export default function NetworkSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector('.network-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="network-section">
      <div className="network-container">
        <div className={`network-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="network-header">
            <h2 className="network-title">King's Education Network</h2>
            <p className="network-intro">
              King's College International represents the collective strength of our schools 
              and partnerships worldwide. By aligning our efforts across continents, we ensure 
              that the impact of the King's education is greater than any single school could 
              achieve alone.
            </p>
          </div>

          <div className="network-pillars">
            <h3 className="pillars-title">Our global network is united by:</h3>
            <div className="pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">🎓</div>
                <p>A commitment to academic excellence and holistic development.</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">🌍</div>
                <p>Opportunities for student and teacher collaboration worldwide.</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">💡</div>
                <p>A shared vision of educational innovation and leadership.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
