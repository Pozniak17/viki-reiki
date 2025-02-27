import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../shared/Container/Container";
import styles from "./Header.module.css";
import logo from "/public/icons/logo.svg";
import menu from "/public/icons/burger.svg";
import language from "/public/icons/language.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
// import MobileMenu from "../MobileMenu/MobileMenu";

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
            <li className={styles.header_wrapper}>
              <img src={logo} alt="logo" className={styles.logo} />
              <p className={styles.logo_text}>Viki Reiki</p>
            </li>

            <li onClick={handleMenuToggle}>
              <img src={menu} alt="burger menu" className={styles.menu_icon} />
            </li>
          </ul>

          {/* <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          {/* тут мобільне меню */}

          <MobileMenu isOpen={isOpen} onToggle={handleMenuToggle} />
          <nav>
            <ul className={styles.menu_list}>
              <li>
                <p className={styles.menu_text}>{t("header.nav1")}</p>
              </li>
              <li>
                <p className={styles.menu_text}>{t("header.nav2")}</p>
              </li>
              <li>
                <p className={styles.menu_text}>{t("header.nav3")}</p>
              </li>
              <li>
                <p className={styles.menu_text}>{t("header.nav4")}</p>
              </li>
              <li>
                <p className={styles.menu_text}>{t("header.nav5")}</p>
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
