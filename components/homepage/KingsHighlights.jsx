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
          KING’S HIGHLIGHTS
        </motion.h2>

        <motion.p
          className="kings-description"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          At King’s, we’re incredibly proud of the academic achievements of our
          pupils. Achieving outstanding exam results in Somerset.
        </motion.p>

        {/* Stats */}
        <div className="kings-stats">
          <div className="stat-box">
            <p className="stat-number">
              96.4<span className="stat-percent">%</span>
            </p>
            <p className="stat-text">GCSE pupils achieved grades at 9-4</p>
          </div>
          <div className="stat-box">
            <p className="stat-number">
              99.2<span className="stat-percent">%</span>
            </p>
            <p className="stat-text">A-Level overall pass rate</p>
          </div>
          <div className="stat-box">
            <p className="stat-number">
              98<span className="stat-percent">%</span>
            </p>
            <p className="stat-text">
              Parents believe our teaching allows their child to make good
              academic progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
