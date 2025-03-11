import { useTranslation } from "react-i18next";
import Section from "../shared/Section/Section";
import Title from "../shared/Title/Title";
import styles from "./Steps.module.css";
import meditate from "/images/Steps/meditate.jpg";

export default function Steps() {
  const { t } = useTranslation();
  return (
    <Section>
      <Title>{t("steps.title")}</Title>
      <p className={styles.text}>{t("steps.text")}</p>

      <div className={styles.wrapper}>
        <img src={meditate} alt="meditate" className={styles.image} />

        <ul className={styles.steps_list}>
          <li className={styles.steps_item}>
            <span className={styles.steps_number}>1</span>
            <div>
              <h3 className={styles.steps_title}>
                {t("steps.list.step1.title")}
              </h3>
              <p className={styles.steps_text}>{t("steps.list.step1.text")}</p>
            </div>
          </li>
          <li className={styles.steps_item}>
            <span className={styles.steps_number}>2</span>
            <div>
              <h3 className={styles.steps_title}>
                {t("steps.list.step2.title")}
              </h3>
              <p className={styles.steps_text}>{t("steps.list.step2.text")}</p>
            </div>
          </li>
          <li className={styles.steps_item}>
            <span className={styles.steps_number}>3</span>
            <div>
              <h3 className={styles.steps_title}>
                {t("steps.list.step3.title")}
              </h3>
              <p className={styles.steps_text}>{t("steps.list.step3.text")}</p>
            </div>
          </li>

          <li className={styles.steps_item}>
            <span className={styles.steps_number}>4</span>
            <div>
              <h3 className={styles.steps_title}>
                {t("steps.list.step4.title")}
              </h3>
              <p className={styles.steps_text}>{t("steps.list.step4.text")}</p>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
}
