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
          Our pupils achieve extraordinary success – far beyond just exam
          results.
        </h2>

        <p>
          I am immensely proud and honoured to lead a school that promotes a
          lifelong love of learning and offers unparalleled opportunities for
          every pupil. King's is an outstanding school with a rich history
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
