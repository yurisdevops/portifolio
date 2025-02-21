import styles from "./styles.module.scss";
import * as motion from "motion/react-client";
export function Contact() {
  return (
    <motion.section
      id="contact"
      className={styles.contact}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className={styles.header}>
        Contato<p className={styles.blink}>|</p>
      </h1>
    </motion.section>
  );
}
