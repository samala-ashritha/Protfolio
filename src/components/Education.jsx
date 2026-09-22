
import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="section education-section">

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>My Academic Journey</span>
        <h2>Education</h2>
      </motion.div>

      <div className="timeline">

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">
              2022 - 2026
            </span>

            <h3>Bachelor of Technology</h3>

            <h4>Information Technology</h4>

            <p>
              JB Institute Of Emgineering And Technology.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">
              2020 - 2022
            </span>

            <h3>Intermediate / Higher Secondary</h3>

            <h4>Siddhartha Junior College</h4>

            
          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Education;

