import React from "react";
import styles from "./styles.module.scss";
import * as motion from "motion/react-client";
import { ProjectCard } from "./components/projectCard";
import projeto1 from "../../assets/images/projeto1.png";
import projeto2 from "../../assets/images/projeto2.png";
import projeto3 from "../../assets/images/projeto3.png";
import projeto4 from "../../assets/images/projeto4.png";
import projeto5 from "../../assets/images/projeto5.png";
import projeto6 from "../../assets/images/projeto6.png";
import projeto7 from "../../assets/images/projeto7.png";
import projeto8 from "../../assets/images/projeto8.png";
import projeto9 from "../../assets/images/projeto9.png";
import projeto10 from "../../assets/images/projeto10.png";
import projeto11 from "../../assets/images/projeto11.png";
import projeto12 from "../../assets/images/projeto12.png";
import projeto13 from "../../assets/images/projeto13.png"
import { Title } from "../../components/title";
import { useSelector } from "react-redux";

const projectCards = [
  {
    title: "PizzaManager",

    image: projeto13,
    technologies:
      "React, Next.Js, TypeScript, Sass, NodeJs, Express, PostgreSQL",

    repository: "https://github.com/yurisdevops/pizzamanager",
    preview: "https://pizzamanager.vercel.app/",
  },
  {
    title: "Portifolio",

    image: projeto12,
    technologies: "Vite, React, JavaScript, Sass, Redux.",

    repository: "https://github.com/yurisdevops/portifolio",
    preview: "https://portfolio-one-ruddy-53.vercel.app/",
  },
  {
    title: "Desafio (teste)",

    image: projeto11,
    technologies:
      "Vite, React, TypeScript, Tailwind CSS, NodeJs, Express, SQLite (Online Render.com)",

    repository: "https://github.com/yurisdevops/frontend-desafiooamigao",
    preview: "https://desafiooamigao.vercel.app/",
  },
  {
    title: "DalyGames",

    image: projeto8,
    technologies: "React, Next.Js, TypeScript, Tailwind CSS",

    repository: "https://github.com/yurisdevops/dalygames",
    preview: "https://dalygames-pearl.vercel.app/",
  },
  {
    title: "DevMotors",
    image: projeto9,
    technologies: "React, Next.Js, TypeScript, Sass, Cosmic CMS.",
    repository: "https://github.com/yurisdevops/devmotors",
    preview: "https://devmotors-zeta.vercel.app/",
  },
  {
    title: "Tem Chamado?",

    image: projeto10,
    technologies:
      "React, Next.Js, NextAuth, TypeScript, Tailwind CSS, MongoDB, Prisma, Zod,React Hook Form.",

    repository: "https://github.com/yurisdevops/temchamado",
    preview: "https://temchamado.vercel.app/",
  },
  {
    title: "Notely",
    image: projeto7,
    technologies: "React, Next.Js, Auth.Js, TypeScript, CSS Modules, Firebase.",
    repository: "https://github.com/yurisdevops/notely",
    preview: "https://notely-ivory.vercel.app/",
  },
  {
    title: "DevCurrency",

    image: projeto1,
    technologies: "Vite, React, TypeScript, CSS, API (CoinCap).",

    repository: "https://github.com/yurisdevops/cripto",
    preview: "https://cripto-iota.vercel.app/",
  },
  {
    title: "DevShop",

    image: projeto2,
    technologies: "Vite, React, TypeScript, Tailwind CSS, API (FAKESTORE).",
    repository: "https://github.com/yurisdevops/devshop",
    preview: "https://devshop-seven.vercel.app/",
  },
  {
    title: "WebCarros",

    image: projeto3,
    technologies: "Next.js, React, TypeScript, Tailwind CSS, API (NewsAPI).",
    repository: "https://github.com/yurisdevops/webcarros",
    preview: "https://webcarros-beta.vercel.app/",
  },
  {
    title: "EduControl",
    image: projeto4,
    technologies:
      "Vite, React, TypeScript, Tailwind CSS, React Hook Form, Zod, Firebase.",
    repository: "https://github.com/yurisdevops/educontrol",
    preview: "https://educontrol.vercel.app/",
  },
  {
    title: "Previsão do Tempo",
    image: projeto5,
    technologies: "React, JavaScript, CSS, API (OpenWeatherMap).",
    repository: "https://github.com/yurisdevops/react-previsao-tempo",
    preview: "https://react-previsao-tempo.vercel.app/",
  },
  {
    title: "DevLinks",
    image: projeto6,
    technologies: "Vite, React, TypeScript, Tailwind CSS, Firebase.",
    repository: "https://github.com/yurisdevops/devlinks",
    preview: "https://devlinks-steel.vercel.app/",
  },
];

export function Projects() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <motion.section
      id="projects"
      className={`${styles.projects}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Title title="Projetos" />
      <div className={styles.cardsContainer}>
        {projectCards.map((card) => (
          <ProjectCard key={card.title} {...card} />
        ))}
      </div>
    </motion.section>
  );
}
