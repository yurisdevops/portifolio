import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import styles from "./Header.module.scss";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleTheme());
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.main} ${darkMode ? styles.darkMode : ""}`}>
      <div className={styles.logo}>
        <a href="/">
          <img src="../images/logo.webp" alt="Logo" />
          <h1>YURI</h1>
        </a>
      </div>

      <div className={styles.hamburger}>
        <button onClick={toggleMenu}>
          <TiThMenuOutline className={styles.icon} />
        </button>{" "}
        <button onClick={handleToggle} className={styles.themeToggle}>
          {darkMode ? <FaSun color="#fff" /> : <FaMoon />}
        </button>
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
        {isMenuOpen ? (
          <></>
        ) : (
          <button onClick={handleToggle} className={styles.themeToggle}>
            {darkMode ? <FaSun color="#fff" /> : <FaMoon />}
          </button>
        )}
      </nav>
    </header>
  );
}
