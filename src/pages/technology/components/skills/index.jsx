import styles from "./styles.module.scss";
import { MdOutlineReportProblem } from "react-icons/md";
import { MdOutlineGroups2 } from "react-icons/md";
import { MdOutlineLightbulb } from "react-icons/md";
import { RiSpeakAiLine } from "react-icons/ri";
import { MdMobileFriendly } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { GiThreeFriends } from "react-icons/gi";

export function Skills() {
  return (
    <div className={styles.skills}>
      <div>
        <MdOutlineReportProblem className={styles.icon} />
        <p>Resolução de problemas</p>
      </div>
      <div>
        <MdOutlineLightbulb className={styles.icon} />
        <p>Criatividade</p>
      </div>
      <div>
        <MdOutlineGroups2 className={styles.icon} />
        <p>Trabalho em equipe</p>
      </div>
      <div>
        <RiSpeakAiLine className={styles.icon} />
        <p>Comunicação</p>
      </div>
      <div>
        <MdMobileFriendly className={styles.icon} />
        <p>Responsividade</p>
      </div>
      <div>
        <FaBookOpenReader className={styles.icon} />
        <p>Aprendizado contínuo</p>
      </div>
      <div>
        <FaUserClock className={styles.icon} />
        <p>Gestão de tempo</p>
      </div>
      <div>
        <GiThreeFriends className={styles.icon} />
        <p>Empatia</p>
      </div>
      <div>
        <GiTeamIdea className={styles.icon} />
        <p>Adaptabilidade</p>
      </div>
    </div>
  );
}
