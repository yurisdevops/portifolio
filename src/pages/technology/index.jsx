import * as motion from "motion/react-client";
import { Title } from "../../components/Title/Title";
import { Skills } from "./components/skills";
import { Technologies } from "./components/technologies";
import styles from "./styles.module.scss";
export function Technology() {
  return (
    <motion.section
      id="technology"
      className={styles.technology}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Title title={"Tecnologias"} />
      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.technologies}
        >
          <h2>Tecnologias</h2>
          <Technologies />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.skills}
        >
          <h2>Habilidades</h2>
          <Skills />
        </motion.div>
      </div>
      <div className={styles.container}></div>
    </motion.section>
  );
}
