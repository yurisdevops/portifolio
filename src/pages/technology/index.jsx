import styles from "./styles.module.scss";
import { Technologies } from "./components/technologies";
import { Skills } from "./components/skills";
import * as motion from "motion/react-client";
import { Title } from "../../components/title";
export function Technology() {
  return (
    <motion.section
      id="technology"
      className={styles.technology}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Title title={"Tecnologias & Habilidades"}/>
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
