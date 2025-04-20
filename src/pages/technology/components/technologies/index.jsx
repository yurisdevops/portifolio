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
import { SiExpo } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";

export function Technologies() {
  return (
    <div className={styles.technologies}>
      <div>
        <FaReact className={styles.icon} />
        <p>React</p>
      </div>
      <div>
        <SiVite className={styles.icon} />
        <p>Vite</p>
      </div>
      <div>
        <FaJsSquare className={styles.icon} />
        <p>JavaScript</p>
      </div>
      <div>
        <FaNode className={styles.icon} />
        <p>Node.js</p>
      </div>
      <div>
        <SiTypescript className={styles.icon} />
        <p>TypeScript</p>
      </div>
      <div>
        <RiFirebaseFill className={styles.icon} />
        <p>Firebase</p>
      </div>
      <div>
        <SiPrisma className={styles.icon} />
        <p>Prisma</p>
      </div>
      <div>
        <SiMongodb className={styles.icon} />
        <p>MongoDB</p>
      </div>
      <div>
        <BiLogoPostgresql className={styles.icon} />
        <p>PostgreSQL</p>
      </div>
      <div>
        <RiNextjsFill className={styles.icon} />
        <p>Next.js</p>
      </div>
      <div>
        <FaSass className={styles.icon} />
        <p>Sass</p>
      </div>
      <div>
        <FaGitAlt className={styles.icon} />
        <p>Git</p>
      </div>
      <div>
        <FaGithubSquare className={styles.icon} />
        <p>GitHub</p>
      </div>
      <div>
        <SiExpo className={styles.icon} />
        <p>Expo</p>
      </div>
      <div>
        <SiCloudinary className={styles.icon} />
        <p>Cloudinary</p>
      </div>
      <div>
        <SiJsonwebtokens className={styles.icon} />
        <p>JWT</p>
      </div>
    </div>
  );
}
