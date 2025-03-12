import styles from "./Footer.module.css";
import Section from "../shared/Section/Section";
import Instagram from "../../../public/icons/instagram.svg";
import InstagramWhite from "../../../public/icons/instagramWhite.svg";

import logo from "/icons/Footer/logo.svg";
import language from "/icons/Footer/map.svg";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Icon from "../shared/Icon/Icon";
import { useState } from "react";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
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
                <li className={styles.icon_item}>
                  <a
                    href="mailto:contactreikivitality@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon id={"icon-gmail"} className={styles.icon_gmail} />
                  </a>
                </li>
                <li className={styles.icon_item}>
                  <a href="">
                    <Icon
                      id={"icon-telegram"}
                      className={styles.icon_telegram}
                    />
                  </a>
                </li>
                <li className={styles.icon_item}>
                  <a
                    href="https://www.facebook.com/groups/923533436324403/?ref=share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      id={"icon-facebook"}
                      className={styles.icon_facebook}
                    />
                  </a>
                </li>
                <li
                  className={styles.icon_item}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <a
                    href="https://www.instagram.com/viki_reiki?utm_source=qr&igsh=MTMxMWk2cjVkdmcweQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={isHovered ? Instagram : InstagramWhite}
                      alt="Instagram Icon"
                      className={styles.icon_instagram}
                    />
                  </a>
                </li>

                <li className={styles.icon_item}>
                  <a
                    href="https://www.youtube.com/@victoriiadrachuk4508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.youtube_link}
                  >
                    <Icon id={"icon-youtube"} className={styles.icon_youtube} />
                  </a>
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
