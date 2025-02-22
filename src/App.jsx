import { useState } from "react";
import styles from "./styles.module.scss";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { ScrollToTopButton } from "./components/scrollButton";
import { Technology } from "./pages/technology";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.main}>
      <Home />
      <About />
      <Technology />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
}

export default App;
