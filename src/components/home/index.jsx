import styles from "./styles.module.scss";
import TextAnimation from "../textAnimation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export function Home() {
  return (
    <section id="home" className={styles.home}>
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
            <FaLinkedin size={60} color="#000" />
          </a>
          <a
            href="https://github.com/yurisdevops"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare size={60} color="#000" />
          </a>
        </div>
      </div>
    </section>
  );
}
