import { useEffect } from "react";
import styles from "./MobileMenu.module.css";
import { NavLink } from "react-router-dom";

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
          <li className={styles.mobile_item}>
            <NavLink className={styles.link} onClick={onToggle} to="/story">
              My Story
            </NavLink>
          </li>
          <li className={styles.mobile_item}>
            <NavLink className={styles.link} onClick={onToggle} to="/sessions">
              Reiki Sessions
            </NavLink>
          </li>
          <li className={styles.mobile_item}>
            <NavLink className={styles.link} onClick={onToggle} to="/calendar">
              Calendar
            </NavLink>
          </li>
          <li className={styles.mobile_item}>
            <a className={styles.link} onClick={onToggle} href="#FAQs">
              FAQs
            </a>
          </li>
          <li className={styles.mobile_item}>
            <a className={styles.link} onClick={onToggle} href="#footer">
              Contact
            </a>
          </li>
          <li className={styles.mobile_item}>
            <p className={styles.link}>Languages</p>
          </li>
        </ul>

        <NavLink onClick={onToggle} to="/" className={styles.logo_wrapper}>
          <img src="/icons/logo.svg" alt="logo" />
          <p className={styles.logo_text}>Viki Reiki</p>
        </NavLink>

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
