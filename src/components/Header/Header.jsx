import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import Container from "../shared/Container/Container";
import styles from "./Header.module.css";
import language from "/icons/language.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import Icon from "../shared/Icon/Icon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#FAQs") {
      const element = document.getElementById("FAQs");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleFaqClick = (e) => {
    e.preventDefault();
    navigate("/#FAQs");
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const { t, i18n } = useTranslation();

  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.menu_link, isActive && styles.active_link);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_container}>
          <ul className={styles.header_list}>
            <li className={styles.logo_item}>
              <Link to="/" className={styles.header_logo}>
                <Icon id="logo-header" className={styles.logo} />
                <p className={styles.logo_text}>Viki Reiki</p>
              </Link>
            </li>

            <li onClick={handleMenuToggle}>
              <Icon id={"icon-burger"} className={styles.menu_icon} />
            </li>
          </ul>

          <MobileMenu isOpen={isOpen} onToggle={handleMenuToggle} />
          <nav>
            <ul className={styles.menu_list}>
              <li>
                <NavLink to="/story" className={buildLinkClass}>
                  {t("header.nav1")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/sessions" className={buildLinkClass}>
                  {t("header.nav2")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/calendar" className={buildLinkClass}>
                  {t("header.nav3")}
                </NavLink>
              </li>
              <li>
                <a
                  href="#FAQs"
                  onClick={handleFaqClick}
                  className={styles.menu_link}
                >
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
