import { useEffect } from "react";
import styles from "./MobileMenu.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Icon from "../shared/Icon/Icon";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export default function MobileMenu({ isOpen, onToggle }) {
  //  мочим скрооол)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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

  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.menu_link, isActive && styles.active_link);
  };

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
            <NavLink className={buildLinkClass} onClick={onToggle} to="/story">
              {t("header.nav1")}
            </NavLink>
          </li>
          <li className={styles.mobile_item}>
            <NavLink
              className={buildLinkClass}
              onClick={onToggle}
              to="/sessions"
            >
              {t("header.nav2")}
            </NavLink>
          </li>
          <li className={styles.mobile_item}>
            <NavLink
              className={buildLinkClass}
              onClick={onToggle}
              to="/calendar"
            >
              {t("header.nav3")}
            </NavLink>
          </li>
          <li className={styles.mobile_item}>
            <a
              className={styles.link}
              onClick={(e) => {
                onToggle(e);
                handleFaqClick(e);
              }}
              href="#FAQs"
            >
              {t("header.nav4")}
            </a>
          </li>
          <li className={styles.mobile_item}>
            <a className={styles.link} onClick={onToggle} href="#footer">
              {t("header.nav5")}
            </a>
          </li>

          <li className={styles.mobile_item}>
            <div className={styles.language_wrapper}>
              <button
                className={`${styles.language_button} ${
                  i18n.language === "en" ? styles.active : ""
                }`}
                onClick={() => i18n.changeLanguage("en")}
              >
                Eng
              </button>

              <button
                className={`${styles.language_button} ${
                  i18n.language === "ua" ? styles.active : ""
                }`}
                onClick={() => i18n.changeLanguage("ua")}
              >
                Ukr
              </button>
            </div>
          </li>
        </ul>

        <NavLink onClick={onToggle} to="/" className={styles.logo_wrapper}>
          <img src="/icons/logo.svg" alt="logo" />
          <p className={styles.logo_text}>Viki Reiki</p>
        </NavLink>

        <button className={styles.close_button} onClick={onToggle}>
          <Icon
            onClick={onToggle}
            id={"icon-cross"}
            className={styles.icon_close}
          />
        </button>
      </div>
    </>
  );
}
