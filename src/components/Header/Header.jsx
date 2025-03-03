import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Container from "../shared/Container/Container";
import styles from "./Header.module.css";
import logo from "/icons/logo.svg";
import menu from "/icons/burger.svg";
import language from "/icons/language.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const { t, i18n } = useTranslation();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_container}>
          <ul className={styles.header_list}>
            <li>
              <NavLink to="/" className={styles.header_logo}>
                <img src={logo} alt="logo" className={styles.logo} />
                <p className={styles.logo_text}>Viki Reiki</p>
              </NavLink>
            </li>

            <li onClick={handleMenuToggle}>
              <img src={menu} alt="burger menu" className={styles.menu_icon} />
            </li>
          </ul>

          <MobileMenu isOpen={isOpen} onToggle={handleMenuToggle} />
          <nav>
            <ul className={styles.menu_list}>
              <li>
                <NavLink to="/story" className={styles.menu_link}>
                  {t("header.nav1")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/sessions" className={styles.menu_link}>
                  {t("header.nav2")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/calendar" className={styles.menu_link}>
                  {t("header.nav3")}
                </NavLink>
              </li>
              <li>
                <a href="#FAQs" className={styles.menu_link}>
                  {t("header.nav4")}
                </a>
              </li>
              <li>
                <a href="#footer" className={styles.menu_link}>
                  {t("header.nav5")}
                </a>
              </li>

              <li className={styles.language_switcher}>
                <img
                  className={styles.language_icon}
                  src={language}
                  alt="change language"
                />

                <div className={styles.language_wrapper}>
                  <ul className={styles.language_list}>
                    <li>
                      <button
                        className={`${styles.language_button} ${
                          i18n.language === "en" ? styles.active : ""
                        }`}
                        onClick={() => i18n.changeLanguage("en")}
                      >
                        Eng
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${styles.language_button} ${
                          i18n.language === "ua" ? styles.active : ""
                        }`}
                        onClick={() => i18n.changeLanguage("ua")}
                      >
                        Ukr
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
