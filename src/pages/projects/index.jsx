import * as motion from "motion/react-client";
import { useSelector } from "react-redux";
import { Title } from "../../components/Title/Title";
import { dataProjects } from "../../constants/project";
import { ProjectCard } from "./components/projectCard";
import styles from "./styles.module.scss";

export function Projects() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <motion.section
      id="projects"
      className={`${styles.projects}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Title title="Projetos" />
      <div className={styles.cardsContainer}>
        {dataProjects.map((card) => (
          <ProjectCard key={card.title} {...card} />
        ))}
      </div>
    </motion.section>
  );
}
