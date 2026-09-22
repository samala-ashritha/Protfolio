
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <motion.p
          className="hero-small"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ashritha
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Web Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          I build modern, responsive and user-friendly web applications
          using React, Java and MySQL.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </motion.div>

        <div className="social-links">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

        </div>

      </div>

      <motion.a
        href="#about"
        className="scroll-down"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
      >
        <FaArrowDown />
      </motion.a>

    </section>
  );
}

export default Hero;

