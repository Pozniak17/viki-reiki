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

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <Section>
        <div className={styles.wrapper}>
          <ul className={styles.title_list}>
            <li className={styles.item}>
              <h3 className={styles.title}>{t("footer.contacts.address1")}</h3>
            </li>
            <li className={styles.item}>
              <h3 className={styles.title}>{t("footer.contacts.number1")}</h3>
            </li>
            <li className={styles.item}>
              <h3 className={styles.title}>{t("footer.contacts.address2")}</h3>
            </li>
            <li className={styles.item}>
              <h3 className={styles.title}>{t("footer.contacts.number2")}</h3>
            </li>
          </ul>

          <div className={styles.rigth_wrapper}>
            <ul className={styles.footer_menu}>
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
              <li>
                <img src={language} alt="language icon" />
              </li>
            </ul>

            <div className={styles.third_wrapper}>
              <ul className={styles.icon_list}>
                <li>
                  <img src={gmail} alt="gmail icon" />
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
