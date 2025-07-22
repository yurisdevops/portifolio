import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";
import TextAnimation from "../../components/TextAnimation/TextAnimation";
import styles from "./styles.module.scss";

export function Home() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <section
      id="home"
      className={`${styles.home} ${darkMode ? styles.darkMode : ""}`}
    >
      <div className={styles.cta}>
        <div>
          <h2>Olá, eu sou o... </h2>
          <h1>YURI SOUZA</h1>
          <TextAnimation />
        </div>

        <div className={styles.midias}>
          <a
            href="https://www.linkedin.com/in/yuridevops/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://github.com/yurisdevops"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
}
