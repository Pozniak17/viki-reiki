import { useTranslation } from "react-i18next";
import styles from "./ServicesCard.module.css";
import { Link } from "react-router-dom";

export default function ServicesCard({ image, title, url, text }) {
  const { t, i18n } = useTranslation();
  const isUkrainian = i18n.language === "ua"; //чи мова українська

  return (
    <div className={isUkrainian ? styles.ukrainian_wrapper : styles.wrapper}>
      <div>
        <img src={image} alt="author photo" className={styles.image} />
        <div className={styles.card_wrapper}>
          <h3 className={styles.card_title}>{title}</h3>
        </div>
        <p className={styles.text}>{text}</p>
      </div>

      <Link to={`sessions/#${url}`} className={styles.button}>
        {t("services.button")}
      </Link>
    </div>
  );
}
