import * as motion from "motion/react-client";
import { Title } from "../../components/Title/Title";
import styles from "./styles.module.scss";

export function About() {
  return (
    <motion.section
      id="about"
      className={styles.about}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Title title={"Sobre"} />

      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.img}
        >
          <img src="../images/profile.webp" alt="Foto de Perfil" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.text}
        >
          <p>
            Sou o <strong>Yuri</strong>, desenvolvedor front-end formado em
            <strong> Análise e Desenvolvimento de Sistemas</strong>, no Rio de Janeiro.
          </p>
          <p>
            Antes de programar, passei anos como técnico de sistemas de segurança
            eletrônica, em cargo de liderança. Hoje atuo como
            <strong> técnico de campo</strong>, resolvendo problemas de rede, hardware
            e software direto com o cliente. Essa rotina me ensinou a entender o que a
            pessoa realmente precisa, explicar soluções técnicas sem complicar e cumprir
            o que foi combinado.
          </p>
          <p>
            No desenvolvimento, crio sites e aplicações com
            <strong> React, TypeScript, Next.js e Node.js</strong>, e também desenvolvo
            o <strong>Telos</strong>, um aplicativo de treino em React Native.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
