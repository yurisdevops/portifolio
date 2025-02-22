import { useState } from "react"; // Importe o useState para controlar o estado do menu
import { TiThMenuOutline } from "react-icons/ti"; // Importe o ícone
import logo from "../../assets//logos/logo.png";
import styles from "./styles.module.scss";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre abrir e fechar o menu
  };

  return (
    <header className={styles.main}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="Logo" />
          <h1>YURI</h1>
        </a>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <TiThMenuOutline size={24} color="#000" />
      </div>

      <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#technology" onClick={toggleMenu}>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
