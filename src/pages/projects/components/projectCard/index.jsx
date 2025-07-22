import * as motion from "motion/react-client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
export function ProjectCard({
  title,
  image,
  repository,
  preview,
  technologies,
}) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`${styles.card} ${darkMode ? styles.darkMode : ""}`}
      >
        <div className={styles.img}>
          <img src={image} alt={title} />
        </div>

        <div className={styles.info}>
          <h2>{title}</h2>

          <span>
            <strong>Tecnologias:</strong> {technologies}
          </span>
          <div className={styles.links}>
            <a target="_blank" rel="noopener noreferrer" href={repository}>
              Repositório <FaGithub />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={preview}>
              Prévia
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
