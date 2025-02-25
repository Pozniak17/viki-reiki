import Section from "../shared/Section/Section";
import styles from "./Introduce.module.css";
import author from "../../../public/images/Introduce/author.jpg";
import { useTranslation } from "react-i18next";

export default function Introduce() {
  const { t } = useTranslation();
  return (
    <Section>
      <div className={styles.wrapper}>
        <img src={author} alt="Victoria author" className={styles.image} />

        <div>
          <h2 className={styles.title}>{t("introduce.introduceTitle")}</h2>
          <p className={styles.text}>{t("introduce.introduceText")}</p>
          <div className={styles.button_wrapper}>
            <button className={styles.button_accent}>
              {t("introduce.buttons.introduceButton1")}
            </button>
            <button className={styles.button}>
              {t("introduce.buttons.introduceButton2")}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
