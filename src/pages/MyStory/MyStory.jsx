import { useState } from "react";
import { useTranslation } from "react-i18next";
import Section from "../../components/shared/Section/Section";
import CustomModal from "../../components/CustomModal/CustomModal";
import styles from "./MyStory.module.css";

export default function MyStory() {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Section>
      <img
        srcSet="/images/MyStory/MyStory-1x.jpg 1x, /images/MyStory/MyStory-2x.jpg 2x"
        src="/images/MyStory/MyStory-1x.jpg 1x"
        className={styles.image}
        alt="Meditation"
      />

      <h2 className={styles.title}>{t("story.title")}</h2>
      <h3 className={styles.second_title}>{t("story.secondTitle")}</h3>
      <p className={styles.text}>{t("story.text")}</p>

      <h2 className={styles.title}>{t("mission.title")}</h2>
      <h3 className={styles.second_title}>{t("mission.secondTitle")}</h3>
      <p className={styles.text}>{t("mission.text")}</p>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <span>
            <img src="/icons/MyStory/house.svg" alt="house icon" />
          </span>
          <p className={styles.list_text}>{t("missionList.item1")}</p>
        </li>

        <li className={styles.list_item}>
          <span>
            <img src="/icons/MyStory/yin-yang.svg" alt="yin-yang icon" />
          </span>
          <p className={styles.list_text}>{t("missionList.item2")}</p>
        </li>

        <li className={styles.list_item}>
          <span>
            <img src="/icons/MyStory/book.svg" alt="book icon" />
          </span>
          <p className={styles.list_text}>{t("missionList.item3")}</p>
        </li>
      </ul>

      <h2 className={styles.title}>{t("choose.title")}</h2>
      <ul style={{ listStyle: "none" }}>
        <li>
          <span>✔️</span>
          <p>{t("chooseList.item1")}</p>
        </li>

        <li>
          <span>✔️</span>
          <p>{t("chooseList.item2")}</p>
        </li>

        <li>
          <span>✔️</span>
          <p>{t("chooseList.item3")}</p>
        </li>
      </ul>
      <p>{t("choose.text")}</p>

      <h2 className={styles.title}>{t("joinMe.title")}</h2>
      <p>{t("joinMe.text")}</p>
      <p>
        <span>📃</span>
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
