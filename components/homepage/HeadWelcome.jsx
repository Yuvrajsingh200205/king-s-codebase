"use client";

import { motion } from "framer-motion";
import "../../styles/components/homepage/HeadWelcome.css";

export default function HeadWelcome() {
  return (
    <section className="head-welcome-section">
      {/* Left Content */}
      <motion.div
        className="head-welcome-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // fade both ways
      >
        <h2>
          Our pupils achieve extraordinary success – far beyond just exam
          results.
        </h2>

        <p>
          I am immensely proud and honoured to lead a school that promotes a
          lifelong love of learning and offers unparalleled opportunities for
          every pupil. King’s is an outstanding school with a rich history
          dating back to 1880. What sets us apart today is our vibrant, dynamic,
          family community, where pupils are inspired to fulfil their potential
          and make a real and lasting difference to the world around them.
        </p>

        <p>
          I warmly invite you to explore this website and discover the spirit of
          our wonderful school. But nothing compares to the experience of
          visiting us in person – we look forward to welcoming you soon.
        </p>

        <div className="headmaster-info">
          <p className="name">Michael Sloan</p>
          <p className="title">Executive Headmaster</p>
        </div>

        <button className="welcome-btn">HEAD’S WELCOME →</button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="head-welcome-right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // fade both ways
      >
        <img
          src="https://www.kings-taunton.co.uk/wp-content/uploads/2025/01/headteacher-1280x0-c-center.webp"
          alt="Executive Headmaster"
        />
      </motion.div>
    </section>
  );
}
