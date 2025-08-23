"use client";

import { useInView } from "react-intersection-observer";
import "../../styles/components/homepage/FadeSection.css";

export default function FadeSection() {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% visible
    triggerOnce: false, // animate in/out continuously
  });

  return (
    <section
      ref={ref}
      className={`fade-section ${inView ? "fade-in" : "fade-out"}`}
    >
      <h2>Outstanding Education in the Heart of Somerset.</h2>
      <p>
        Located in beautiful Somerset countryside, our independent school offers
        the perfect environment for learning and personal growth. King’s College
        Taunton combines the benefits of a traditional English private school
        with modern teaching methods and facilities.
      </p>
      <p>
        Our boarding school community welcomes students from across the
        Southwest and internationally, creating a diverse, vibrant learning
        environment. As one of Somerset’s leading independent schools, we
        prepare pupils for success at top universities and life beyond school.
      </p>
    </section>
  );
}
