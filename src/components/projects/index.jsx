import React from "react";
import styles from "./styles.module.scss";
import * as motion from "motion/react-client";


export function Projects() {
  return (
    <motion.section
      id="projects"
      className={styles.projects}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
    </motion.section>
  );
}
