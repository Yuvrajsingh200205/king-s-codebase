"use client";

import { useInView } from "react-intersection-observer";
import "../../styles/components/homepage/FadeSection.css";

export default function FadeSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className={`fade-section ${inView ? "fade-in" : "fade-out"}`}
    >
      <div className="content-wrapper">
        
        {/* Left Column - Social Responsibility */}
        <div className="content-column">
          <div className="column-content">
            <div className="section-header">
              <h2 className="section-title">Social Responsibility & Community Engagement</h2>
            </div>
            
            <div className="section-body">
              <p className="main-text">
                King's College International believes education must serve beyond the classroom. 
                Across our schools, we support local community projects, scholarships, and teacher 
                training initiatives that contribute to regional education development.
              </p>
              
              <p className="secondary-text">
                Whether through bursaries, volunteering, or collaborative outreach programmes, 
                King's schools are committed to creating a lasting positive impact on society, 
                true to our founding ethos of service through education.
              </p>

              <div className="features-list">
                <div className="feature">• Community Projects</div>
                <div className="feature">• Scholarship Programs</div>
                <div className="feature">• Teacher Training Initiatives</div>
                <div className="feature">• Regional Education Development</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Cultural Bridges */}
        <div className="content-column">
          <div className="column-content">
            <div className="section-header">
              <h2 className="section-title">Building Bridges Across Cultures</h2>
            </div>
            
            <div className="section-body">
              <p className="main-text">
                Cultural understanding is central to a King's education. By fostering dialogue 
                and exchange between different societies, we prepare our students to be 
                open-minded global citizens.
              </p>
              
              <p className="secondary-text">
                These initiatives ensure that the King's community is not just a collection 
                of schools, but a truly global family.
              </p>

              <div className="programs-section">
                <h3 className="programs-title">Our schools regularly engage in:</h3>
                <div className="programs-list">
                  <div className="program">• Student and teacher exchange programmes</div>
                  <div className="program">• Collaborative projects and competitions across campuses</div>
                  <div className="program">• International summer schools and internships</div>
                  <div className="program">• Secondments and professional sharing among teachers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
