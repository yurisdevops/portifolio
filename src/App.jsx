import { useState } from "react";
import styles from "./styles.module.scss";

import { Home } from "./components/home";
import { About } from "./components/about";
import { ScrollToTopButton } from "./components/scrollButton";
import { Technology } from "./components/technology";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

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
