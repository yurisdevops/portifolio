import styles from "./styles.module.scss";
import solution from "../../../../assets/icons/solution.ico";
import creativity from "../../../../assets/icons/creativity.ico";
import collaboration from "../../../../assets/icons/collaboration.ico";
import communication from "../../../../assets/icons/communication.ico";
import mobile from "../../../../assets/icons/mobile.png";
import apprenticeship from "../../../../assets/icons/apprenticeship.ico";
import time from "../../../../assets/icons/time.ico";
import empathy from "../../../../assets/icons/empathy.ico";
import adaptation from "../../../../assets/icons/adaptation.ico";

export function Skills() {
  return (
    <div className={styles.skills}>
      <div>
        <img src={solution} alt="" />
        <p>Resolução de problemas</p>
      </div>
      <div>
        <img src={creativity} alt="" />
        <p>Criatividade</p>
      </div>
      <div>
        <img src={collaboration} alt="" />
        <p>Trabalho em equipe</p>
      </div>
      <div>
        <img src={communication} alt="" />
        <p>Comunicação</p>
      </div>
      <div>
        <img src={mobile} alt="" />
        <p>Responsividade</p>
      </div>
      <div>
        <img src={apprenticeship} alt="" />
        <p>Aprendizado contínuo</p>
      </div>
      <div>
        <img src={time} alt="" />
        <p>Gestão de tempo</p>
      </div>
      <div>
        <img src={empathy} alt="" />
        <p>Empatia</p>
      </div>
      <div>
        <img src={adaptation} alt="" />
        <p>Adaptabilidade</p>
      </div>
    </div>
  );
}
