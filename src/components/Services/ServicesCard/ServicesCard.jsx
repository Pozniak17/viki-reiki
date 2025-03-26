import { useTranslation } from "react-i18next";
import styles from "./ServicesCard.module.css";
import { useState } from "react";
import CustomModal from "../../CustomModal/CustomModal";

export default function ServicesCard({ image, title, text }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

      <button className={styles.button} onClick={() => setModalIsOpen(true)}>
        {t("services.button")}
      </button>
      <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </div>
  );
}
