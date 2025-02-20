import styles from "./styles.module.scss";
import profile from "../../assets/profile.jpg";
import * as motion from "motion/react-client";

export function About() {
  return (
    <motion.section
      id="about"
      className={styles.about}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className={styles.header}>
        Sobre<p className={styles.blink}>|</p>
      </h1>

      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.img}
        >
          <img src={profile} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.text}
        >
          {" "}
          <p>
            {" "}
            Eu me chamo <strong>Yuri</strong>, tenho 30 anos e sou casado com a{" "}
            <strong>Thaiza</strong>.{" "}
          </p>{" "}
          <p>
            {" "}
            Sou um <strong>Desenvolvedor Front-End</strong> recém-formado em{" "}
            <strong>Análise e Desenvolvimento de Sistemas</strong> apaixonado
            por programação de softwares.{" "}
          </p>{" "}
          <p>
            {" "}
            Em minha trajetória profissional, sempre atuei diretamente com o
            setor de tecnologia. Por anos, fui técnico de sistemas de segurança
            eletrônica com cargo de liderança na empresa. Hoje, atuo como
            técnico em informática na área de suporte técnico, lidando com
            problemas de rede, software e hardware. Mesmo com essas obrigações,
            venho me aperfeiçoando dia após dia como desenvolvedor, me
            especializando ainda mais nas tecnologias, tais como:{" "}
            <strong>
              React, JavaScript, TypeScript, Tailwind CSS, Sass, Next.js,
              Node.js, MongoDB, Firebase e entre outras.{" "}
            </strong>{" "}
          </p>{" "}
        </motion.div>
      </div>
    </motion.section>
  );
}
