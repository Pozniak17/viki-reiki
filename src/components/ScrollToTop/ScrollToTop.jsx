import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // Показуємо кнопку після 200px прокрутки
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button className={styles.button} onClick={scrollToTop}>
        {/* <img src="/icons/ButtonUp/chevron-button.svg" alt="Button up" /> */}
      </button>
    )
  );
}
