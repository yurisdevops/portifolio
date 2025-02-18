import styles from "./styles.module.scss";

export function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        consectetur neque, vel semper mi. Sed euismod tellus non diam viverra,
        vitae ullamcorper nunc commodo. Nulla facilisi. Sed consectetur faucibus
        velit, vitae fringilla dolor pellentesque vel. Sed et tincidunt ipsum.
        Nulla facilisi. Sed consectetur faucibus velit, vitae fringilla dolor
        pellentesque vel.
      </p>
    </section>
  );
}
