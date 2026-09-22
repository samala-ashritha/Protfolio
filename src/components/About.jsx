
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpeg";
function About() {
  return (
    <section id="about" className="section about-section">

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Get To Know Me</span>
        <h2>About Me</h2>
      </motion.div>

      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="image-frame">
            <img src={profileImage} alt="Ashritha" />
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Passionate About Building Things With Code</h3>

          <p>
            I am a passionate developer interested in building modern
            and practical web applications. I enjoy solving problems
            through programming and continuously improving my technical
            skills.
          </p>

          <p>
            My primary interests include Java, React,
            JavaScript, MySQL and full-stack web development.
          </p>

          <div className="about-info">

            <div>
              <strong>Frontend</strong>
              <span>React.js</span>
            </div>

            <div>
              <strong>Backend</strong>
              <span>Java </span>
            </div>

            <div>
              <strong>Database</strong>
              <span>MySQL</span>
            </div>

            <div>
              <strong>Tools</strong>
              <span>Git & GitHub</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;

