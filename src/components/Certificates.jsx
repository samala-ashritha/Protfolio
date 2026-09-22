
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "Mysql",
    issuer: "Udemy",
    year: "2025",
  },
  {
    title: "Introduction to ML",
    issuer: "Add Issuing Organization",
    year: "2025",
  },
  {
    title: "Python Programming",
    issuer: "Internshala",
    year: "2024",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="section certificates-section">

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Achievements</span>
        <h2>Certificates</h2>
      </motion.div>

      <div className="certificates-grid">

        {certificates.map((certificate, index) => (
          <motion.div
            className="certificate-card"
            key={certificate.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >

            <div className="certificate-icon">
              <FaCertificate />
            </div>

            <div>
              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <span>{certificate.year}</span>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Certificates;

