import styles from "./Title.module.scss";

export function Title({ title }) {
  return (
    <h1 className={styles.header}>
      {title}
      <p className={styles.blink}>|</p>
    </h1>
  );
}
