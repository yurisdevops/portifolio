import styles from "./styles.module.scss";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export function Technologies() {
  return (
    <div className={styles.technologies}>
      <div>
        <FaReact size={60} color="#000" />
        <p>React</p>
      </div>
      <div>
        <SiVite size={60} color="#000" />
        <p>Vite</p>
      </div>
      <div>
        <FaJsSquare size={60} color="#000" />
        <p>JavaScript</p>
      </div>
      <div>
        <FaNode size={60} color="#000" />
        <p>Node.js</p>
      </div>
      <div>
        <SiTypescript size={60} color="#000" />
        <p>TypeScript</p>
      </div>
      <div>
        <RiFirebaseFill size={60} color="#000" />
        <p>Firebase</p>
      </div>
      <div>
        <SiPrisma size={60} color="#000" />
        <p>Prisma</p>
      </div>
      <div>
        <SiMongodb size={60} color="#000" />
        <p>MongoDB</p>
      </div>
      <div>
        <BiLogoPostgresql size={60} color="#000" />
        <p>PostgreSQL</p>
      </div>
      <div>
        <RiNextjsFill size={60} color="#000" />
        <p>Next.js</p>
      </div>
      <div>
        <FaSass size={60} color="#000" />
        <p>Sass</p>
      </div>
      <div>
        <FaGitAlt size={60} color="#000" />
        <p>Git</p>
      </div>
      <div>
        <FaGithubSquare size={60} color="#000" />
        <p>GitHub</p>
      </div>
    </div>
  );
}
