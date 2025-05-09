import { useState } from "react";
import Section from "../shared/Section/Section";
import styles from "./Introduce.module.css";
import { useTranslation } from "react-i18next";
import CustomModal from "../CustomModal/CustomModal";

export default function Introduce() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <Section>
      <div className={styles.wrapper}>
        <picture>
          {/* Десктоп */}
          <source
            srcSet="/images/Introduce/Desktop/Introduce-desktop-1x.jpg 1x, /images/Introduce/Desktop/Introduce-desktop-2x.jpg 2x"
            media="(min-width: 1440px)"
          />

          {/* Таблет */}
          <source
            srcSet="/images/Introduce/Tablet/Introduce-tablet-1x.jpg 1x, /images/Introduce/Tablet/Introduce-tablet-2x.jpg 2x"
            media="(min-width: 744px)"
          />
          {/* Мобільні */}
          <source
            srcSet="/images/Introduce/Mobile/Introduce-mobile-1x.jpg 1x, /images/Introduce/Mobile/Introduce-mobile-2x.jpg 2x"
            media="(max-width: 743px)"
          />
          {/* Дефолт*/}
          <img
            src="/images/Introduce/Desktop/Introduce-desktop-1x.jpg"
            alt="Victoria"
            className={styles.image}
          />
        </picture>

        <div>
          <h2 className={styles.title}>{t("introduce.introduceTitle")}</h2>
          <p className={styles.text}>{t("introduce.introduceText")}</p>
          <div className={styles.button_wrapper}>
            <button
              className={styles.button_accent}
              onClick={() => setModalIsOpen(true)}
            >
              {t("introduce.buttons.introduceButton1")}
            </button>

            <a href="#services" className={styles.button}>
              {t("introduce.buttons.introduceButton2")}
            </a>
          </div>
        </div>
      </div>
      <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </Section>
  );
}
