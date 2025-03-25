import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Section from "../../components/shared/Section/Section";
import CustomModal from "../../components/CustomModal/CustomModal";
import styles from "./MyStory.module.css";

export default function MyStory() {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Section>
      <div className={styles.wrapper}>
        <motion.img
          srcSet="/images/MyStory/circle-left-1x.jpg 1x, /images/MyStory/circle-left-2x.jpg 2x"
          src="/images/MyStory/circle-left-1x.jpg 1x"
          className={styles.image_desktop}
          alt="circle"
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.img
          srcSet="/images/MyStory/MyStory-1x.jpg 1x, /images/MyStory/MyStory-2x.jpg 2x"
          src="/images/MyStory/MyStory-1x.jpg 1x"
          className={styles.image}
          alt="Meditation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />

        <motion.img
          srcSet="/images/MyStory/circle-right-1x.jpg 1x, /images/MyStory/circle-right-2x.jpg 2x"
          src="/images/MyStory/circle-right-1x.jpg 1x"
          className={styles.image_desktop}
          alt="circle"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        />
      </div>

      <h2 className={styles.title}>{t("story.title")}</h2>
      <h3 className={styles.second_title}>{t("story.secondTitle")}</h3>
      <p className={styles.text}>{t("story.text")}</p>

      <img
        className={styles.next_image}
        srcSet="/images/MyStory/circle-left-1x.jpg 1x, /images/MyStory/circle-left-2x.jpg 2x"
        src="/images/MyStory/circle-right-1x.jpg 1x"
        alt="circle"
      />

      <h2 className={styles.title}>{t("mission.title")}</h2>
      <h3 className={styles.second_title}>{t("mission.secondTitle")}</h3>
      <p className={styles.text}>{t("mission.text")}</p>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img src="/icons/MyStory/house.svg" alt="house icon" />

          <p className={styles.list_text}>{t("missionList.item1")}</p>
        </li>

        <li className={styles.list_item}>
          <img src="/icons/MyStory/yin-yang.svg" alt="yin-yang icon" />

          <p className={styles.list_text}>{t("missionList.item2")}</p>
        </li>

        <li className={styles.list_item}>
          <img src="/icons/MyStory/book.svg" alt="book icon" />

          <p className={styles.list_text}>{t("missionList.item3")}</p>
        </li>
      </ul>

      <img
        className={styles.next_image}
        srcSet="/images/MyStory/circle-right-1x.jpg 1x, /images/MyStory/circle-right-2x.jpg 2x"
        src="/images/MyStory/circle-right-1x.jpg 1x"
        alt="circle"
      />

      <h2 className={styles.title}>{t("choose.title")}</h2>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img src="/icons/MyStory/diamond.svg" alt="list mark icon" />

          <p className={styles.list_text}>{t("chooseList.item1")}</p>
        </li>

        <li className={styles.list_item}>
          <img src="/icons/MyStory/diamond.svg" alt="list mark icon" />

          <p className={styles.list_text}>{t("chooseList.item2")}</p>
        </li>

        <li className={styles.list_item}>
          <img src="/icons/MyStory/diamond.svg" alt="list mark icon" />

          <p className={styles.list_text}>{t("chooseList.item3")}</p>
        </li>
      </ul>
      <p className={styles.text_choose}>{t("choose.text")}</p>

      <h2 className={styles.title}>{t("joinMe.title")}</h2>
      <p className={styles.text}>{t("joinMe.text")}</p>

      <p className={styles.join}>
        <img src="/icons/MyStory/mail.svg" alt="mail icon" />
        {t("joinMe.secondText")}
      </p>

      <button className={styles.button} onClick={() => setModalIsOpen(true)}>
        {t("joinMe.button")}
      </button>
      <img
        srcSet="/images/MyStory/Circle-1x.png 1x, /images/MyStory/Circle-2x.png 2x"
        src="/images/MyStory/Circle-1x.png 1x"
        className={styles.image_second}
        alt="Balance circle"
      />
      <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </Section>
  );
}
