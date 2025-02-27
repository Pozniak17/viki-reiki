import { useEffect } from "react";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ isOpen, onToggle }) {
  //  мочим скрооол)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onToggle}></div>}
      <div
        className={`${styles.mobile_navigation} ${
          isOpen ? styles.mobile_navigation_active : ""
        }`}
      >
        <ul className={styles.mobile_list}>
          <li className={styles.mobile_item}>My Story</li>
          <li className={styles.mobile_item}>Reiki Sessions</li>
          <li className={styles.mobile_item}>Calendar</li>
          <li className={styles.mobile_item}>FAQs</li>
          <li className={styles.mobile_item}>Contact</li>
          <li className={styles.mobile_item}>Languages</li>
        </ul>

        <div className={styles.logo_wrapper}>
          <img src="../../../public/icons/logo.svg" alt="logo" />
          <p className={styles.logo_text}>Viki Reiki</p>
        </div>

        <button className={styles.close_button} onClick={onToggle}>
          <img
            onClick={onToggle}
            src="/icons/Modal/cross.svg"
            alt="close"
            className={styles.icon_close}
          />
        </button>
      </div>
    </>
  );
}
