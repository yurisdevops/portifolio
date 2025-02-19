import styles from "./styles.module.scss";
import { Technologies } from "./components/technologies";
import { Skills } from "./components/skills";
export function Technology() {
  return (
    <section id="technology" className={styles.technology}>
      <h1 className={styles.header}>
        Tecnologias<strong> & </strong> Habilidades
        <p className={styles.blink}>|</p>
      </h1>
      <div className={styles.grid}>
        <div className={styles.technologies}>
          <h2>Tecnologias</h2>
          <Technologies />
        </div>
        <div className={styles.skills}>
          <h2>Habilidades</h2>
          <Skills />
        </div>
      </div>
      <div className={styles.container}></div>
    </section>
  );
}
