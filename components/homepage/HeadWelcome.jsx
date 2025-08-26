"use client";

import { motion } from "framer-motion";
import "../../styles/components/homepage/HeadWelcome.css";

export default function HeadWelcome() {
  return (
    <section className="head-welcome-section">
      {/* Left Content */}
      <motion.div
        className="head-welcome-left"
        initial={{ opacity: 0, transform: "translate3d(-30px, 0, 0)" }}
        whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>
          A Global Family of Schools – Learning Without Borders
        </h2>

        <p>
          From the historic foundation of King's College Taunton in the UK, our journey has expanded to vibrant communities in Doha (Qatar), Riyadh (Saudi Arabia), and Gurugram (India). Together with our strategic partner, Global Educational Venture (GEV), based in Dubai, we are building a dynamic network of schools that share knowledge, collaborate across continents, and inspire innovation in education.
        </p>

        <p>
          Every school in this network benefits from the values and standards of King's College UK, while contributing their own local character and cultural richness. Our future growth across India, Southeast Asia, and the Far East will further strengthen this vision of connected education.
        </p>

        <div className="headmaster-info">
          <p className="name">Michael Sloan</p>
          <p className="title">Executive Headmaster</p>
        </div>

        <button className="welcome-btn">HEAD'S WELCOME →</button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="head-welcome-right"
        initial={{ opacity: 0, transform: "translate3d(30px, 0, 0)" }}
        whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src="/headteacher.png" alt="Executive Headmaster" />
      </motion.div>
    </section>
  );
}
