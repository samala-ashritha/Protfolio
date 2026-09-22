
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Let's Connect</span>
        <h2>Contact Me</h2>
      </motion.div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <h3>Have a project in mind?</h3>

        <p>
          I'm always interested in learning, building new projects
          and connecting with other developers.
        </p>

        <a
          href="mailto:samalaashritha27@gmail.com"
          className="email-btn"
        >
          <FaEnvelope />
          Send Me an Email
        </a>

        <div className="contact-socials">

          <a
            href="https://github.com/samala-ashritha"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ashritha-samala-134516272"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;

