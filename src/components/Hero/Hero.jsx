import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

import CustomModal from "../CustomModal/CustomModal";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isUkrainian = i18n.language === "ua"; //чи мова українська

  console.log(i18n.language);
  return (
    <section className={styles.hero}>
      <picture>
        {/* Десктоп */}
        <source
          srcSet="/images/Hero/Desktop/Text-desktop-1x.png 1x, /images/Hero/Desktop/Text-desktop-2x.png 2x"
          media="(min-width: 1440px)"
        />
        {/* Таблет */}
        <source
          srcSet="/images/Hero/Tablet/Text-tablet-1x.png 1x, /images/Hero/Tablet/Text-tablet-2x.png 2x"
          media="(min-width: 744px)"
        />
        {/* Мобільні*/}
        <source
          srcSet="/images/Hero/Mobile/Text-mobile-1x.png 1x, /images/Hero/Mobile/Text-mobile-2x.png 2x"
          media="(max-width: 743px)"
        />
        {/* Дефолт */}
        <img
          src="/images/Hero/Mobile/Text-mobile-1x.png"
          alt="Hero text"
          className={styles.hero_cirleText}
        />
      </picture>

      <div className={styles.hero_circle}>
        <motion.h1
          className={isUkrainian ? styles.ukrainian_title : styles.hero_title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t("hero.heroTitle")}
        </motion.h1>
        <motion.h2
          className={styles.hero_text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t("hero.heroText")}
        </motion.h2>
        <motion.button
          onClick={() => setModalIsOpen(true)}
          className={isUkrainian ? styles.ukrainian_button : styles.hero_button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9, originX: 0.5, originY: 0.5 }}
        >
          {t("hero.heroButton")}
        </motion.button>

        <picture>
          {/* Десктоп */}
          <source
            srcSet="/images/Hero/Desktop/Leaves-desktop-1x.png 1x, /images/Hero/Desktop/Leaves-desktop-2x.png 2x"
            media="(min-width: 1440px)"
          />

          {/* Таблет */}
          <source
            srcSet="/images/Hero/Tablet/Leaves-tablet-1x.png 1x, /images/Hero/Tablet/Leaves-tablet-2x.png 2x"
            media="(min-width: 744px)"
          />
          {/* Мобільні*/}
          <source
            srcSet="/images/Hero/Mobile/Leaves-mobile-1x.png 1x, /images/Hero/Mobile/Leaves-mobile-2x.png 2x"
            media="(max-width: 743px)"
          />

          {/* Дефолт*/}
          <img
            className={styles.hero_imageLeaves}
            src="/images/Hero/Mobile/Leaves-mobile-1x.png"
            alt="Hero leaves"
          />
        </picture>
      </div>

      <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </section>
  );
}
