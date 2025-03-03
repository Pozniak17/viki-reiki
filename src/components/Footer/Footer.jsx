import styles from "./Footer.module.css";
import Section from "../shared/Section/Section";

import gmail from "../../../public/icons/Footer/gmail.svg";
import telegram from "../../../public/icons/Footer/telegram.svg";
import instagram from "../../../public/icons/Footer/instagram.svg";
import facebook from "../../../public/icons/Footer/facebook.svg";
import youtube from "../../../public/icons/Footer/youtube.svg";
import logo from "../../../public/icons/Footer/logo.svg";
import language from "../../../public/icons/Footer/map.svg";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer} id="footer">
      <Section>
        <div className={styles.wrapper}>
          <ul className={styles.title_list}>
            <li className={styles.item}>
              <a
                href="https://maps.app.goo.gl/XvdQypwiYPRXMRyC9"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}
              >
                {t("footer.contacts.address1")}
              </a>
            </li>
            <li className={styles.item}>
              <a href="tel:+35851166326" className={styles.link}>
                {t("footer.contacts.number1")}
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://maps.app.goo.gl/3p7s4XJ5FgDHpJeZA"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}
              >
                {t("footer.contacts.address2")}
              </a>
            </li>

            <li className={styles.item}>
              <a href="tel:+380973007841" className={styles.link}>
                {t("footer.contacts.number2")}
              </a>
            </li>
          </ul>

          <div className={styles.rigth_wrapper}>
            <ul className={styles.footer_menu}>
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
                <NavLink className={styles.menu_link}>
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
              <li>
                <img src={language} alt="language icon" />
              </li>
            </ul>

            <div className={styles.third_wrapper}>
              <ul className={styles.icon_list}>
                <li>
                  <a href="mailto:example@mail.ua">
                    <img src={gmail} alt="gmail icon" />
                  </a>
                </li>
                <li>
                  <img src={telegram} alt="telegram icon" />
                </li>
                <li>
                  <img src={facebook} alt=" facebook icon" />
                </li>
                <li>
                  <img src={instagram} alt="instagram icon" />
                </li>
                <li>
                  <img src={youtube} alt="youtube icon" />
                </li>
              </ul>

              <div className={styles.logo_wrapper}>
                <img src={logo} alt="footer logo" className={styles.logo} />
                <h2 className={styles.logo_title}>Viki Reiki</h2>
              </div>
            </div>
            <p className={styles.copyright}>{t("footer.copyright")}</p>
          </div>
        </div>
      </Section>
    </footer>
  );
}
