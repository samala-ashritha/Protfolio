
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "To-Do-List Application",
    description:
      "A simple and responsive To-Do List application built with React.js. Users can add, edit, complete, filter, and delete tasks using React state management and event handling..",
    technologies: [
      "React",
      "JavaScript",
      "Css",
      
      
    ],
    github: "https://github.com/samala-ashritha/To-do-list",
    demo: "https://to-do-list-azure-zeta.vercel.app/",
  },

  {
    title: "Counter Website",
    description:
      "A simple and responsive  To-Do List application built with React.js.Users can add,edit,complete,filter,and delete tasks using  React state management and event handling.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
    ],
    github: "https://github.com/samala-ashritha/Counter-App",
    demo: "https://counter-app-indol-six.vercel.app/",
  },

  // {
  //   title: "Project Three",
  //   description:
  //     "Add another academic or personal project here with a short explanation of the problem, solution and technologies used.",
  //   technologies: [
  //     "Java",
  //     "React",
  //     "MySQL",
  //   ],
  //   github: "https://github.com/",
  //   demo: "#",
  // },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>What I've Built</span>
        <h2>My Projects</h2>
      </motion.div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            <div className="project-top">
              <span>0{index + 1}</span>

              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Projects;

