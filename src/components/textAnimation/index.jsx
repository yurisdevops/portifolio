import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

const TextAnimation = () => {
  const texts = ["FRONT-END", "DESENVOLVEDOR WEB"];

  const [currentText, setCurrentText] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);

  const [textIndex, setTextIndex] = useState(0);

  const darkMode = useSelector((state) => state.theme.darkMode);
  useEffect(() => {
    const typingSpeed = 100; //
    const pauseBeforeDelete = 2000;

    if (isDeleting) {
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));

        if (currentText === "") {
          setIsDeleting(false);

          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        const fullText = texts[textIndex];
        setCurrentText(fullText.slice(0, currentText.length + 1));

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [currentText, isDeleting, textIndex, texts]);

  return (
    <div
      className={`${styles.textContainer} ${darkMode ? styles.darkMode : ""}`}
    >
      <span className={styles.text}>{currentText}</span>
      <span className={styles.cursor}>|</span>
    </div>
  );
};

export default TextAnimation;
