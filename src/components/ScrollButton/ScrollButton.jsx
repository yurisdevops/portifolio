import { FaArrowAltCircleUp } from "react-icons/fa";
import styles from "./ScrollButton.module.scss";

export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={styles.scrollToTopButton} onClick={scrollToTop}>
      <FaArrowAltCircleUp size={44} />
    </button>
  );
}
