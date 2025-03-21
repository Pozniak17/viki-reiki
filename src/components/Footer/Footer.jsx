import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Footer.module.css";
import Section from "../shared/Section/Section";
import Instagram from "/icons/instagram.svg";
import InstagramWhite from "/icons/instagramWhite.svg";
import language from "/icons/Footer/map.svg";
import Icon from "../shared/Icon/Icon";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef(null); // Посилання на модалку

  // закриваю при кліку поза модалкою
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
                <NavLink
                  to="/story"
                  className={styles.menu_link}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {t("header.nav1")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sessions"
                  className={styles.menu_link}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {t("header.nav2")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.menu_link}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
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

              <div>
                <Link
                  to="/"
                  className={styles.logo_wrapper}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Icon id={"logo-footer"} className={styles.logo} />
                  <h2 className={styles.logo_title}>Viki Reiki</h2>
                </Link>
              </div>
            </div>

            <div>
              <p
                className={styles.copyright}
                onClick={() => setIsOpen(!isOpen)}
              >
                {t("footer.copyright")}
              </p>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className={styles.authors}
                    ref={modalRef}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ul className={styles.authors_list}>
                      <li className={styles.author_item}>
                        <a
                          href="https://github.com/Pozniak17"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.author_link}
                        >
                          <div className={styles.author_wrapper}>
                            <img
                              srcSet="/images/Footer/Ye-1x.jpg 1x, /images/Footer/Ye-2x.jpg 2x"
                              src="/images/Footer/Ye-1x.jpg 1x"
                              className={styles.author_images}
                              alt="Pozniak Yevhenii"
                            />
                            <div>
                              <h3 className={styles.author_title}>
                                Євгеній Позняк
                              </h3>
                              <p className={styles.author_text}>Розробник</p>
                              <p className={styles.author_text}>
                                Jekamanu@gmail.com
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>

                      <li className={styles.author_item}>
                        <a
                          href="https://github.com/nazinamari"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.author_link}
                        >
                          <div className={styles.author_wrapper}>
                            <img
                              srcSet="/images/Footer/Ma-1x.jpg 1x, /images/Footer/Ma-2x.jpg 2x"
                              src="/images/Footer/Ma-1x.jpg 1x"
                              className={styles.author_images}
                              alt="Marina Nazina"
                            />
                            <div>
                              <h3 className={styles.author_title}>
                                Марина Назіна
                              </h3>
                              <p className={styles.author_text}>
                                UI/UX Дизайнер
                              </p>
                              <p className={styles.author_text}>
                                nzyame@gmail.com
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}
