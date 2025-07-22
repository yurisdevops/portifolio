import { useSelector } from "react-redux";
import { Header } from "./components/Header/Header";
import { ScrollToTopButton } from "./components/ScrollButton/ScrollButton";
import { About } from "./pages/about";
import { Contact } from "./pages/Contact/";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { Technology } from "./pages/technology";
import styles from "./styles.module.scss";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${styles.main} ${darkMode ? styles.darkMode : ""}`}>
      <Header />
      <Home />
      <About />
      <Technology />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
