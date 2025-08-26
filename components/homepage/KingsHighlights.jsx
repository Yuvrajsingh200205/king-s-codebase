"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../styles/components/homepage/KingsHighlights.css";

export default function KingsHighlights() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="kings-section" ref={ref}>
      <div className="kings-container">
        {/* Heading + Description */}
        <motion.h2
          className="kings-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          King's Education Network
        </motion.h2>

        <motion.p
          className="kings-description"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          King's College International represents the collective strength of our schools and partnerships worldwide. By aligning our efforts across continents, we ensure that the impact of the King's education is greater than any single school could achieve alone.
          <br /><br />
          Our global network is united by:
        </motion.p>

        {/* Stats */}
        <div className="kings-stats">
          <div className="stat-box">
            <p className="stat-number">
              <span className="stat-icon">🎓</span>
            </p>
            <p className="stat-text">A commitment to academic excellence and holistic development.</p>
          </div>
          <div className="stat-box">
            <p className="stat-number">
              <span className="stat-icon">🌍</span>
            </p>
            <p className="stat-text">Opportunities for student and teacher collaboration worldwide.</p>
          </div>
          <div className="stat-box">
            <p className="stat-number">
              <span className="stat-icon">🚀</span>
            </p>
            <p className="stat-text">A shared vision of educational innovation and leadership.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
