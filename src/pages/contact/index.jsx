import * as motion from "motion/react-client";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import styles from "./styles.module.scss";

const WHATSAPP_NUMBER = "5521990352415";
const WHATSAPP_MESSAGE =
  "Olá, Yuri! Vi seu portfólio e gostaria de conversar sobre um projeto.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function Contact() {
  return (
    <motion.footer
      id="contact"
      className={styles.contact}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <section className={styles.footer}>
        <div className={styles.info}>
          <h2>Estou disponível para novos projetos!</h2>

          <span>
            Estou sempre em busca de novos projetos emocionantes e oportunidades
            para criar algo incrível. Se você procura inovação e criatividade,
            vamos transformar suas ideias em realidade juntos.
          </span>
          <a
            className={styles.phone}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaWhatsapp color="#008000" size={24} /> Fale comigo!
            </button>
          </a>
        </div>
        <div className={styles.midias}>
          <a
            href="https://github.com/yurisdevops"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/yuridevops/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
        <div className={styles.namingRights}>
          <p>
            Desenvolvido com <span>♥</span> por
            <a
              href="https://github.com/yurisdevops"
              target="_blank"
              rel="noopener noreferrer"
            >
              @yuridevops
            </a>
          </p>
          <p>© 2025 Todos os direitos reservados.</p>
        </div>
      </section>
    </motion.footer>
  );
}
