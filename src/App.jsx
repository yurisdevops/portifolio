import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Technology } from "./pages/technology";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { ScrollToTopButton } from "./components/scrollButton";

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
