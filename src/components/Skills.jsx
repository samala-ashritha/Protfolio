
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiSpringboot, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>What I Work With</span>
        <h2>Technical Skills</h2>
      </motion.div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;

