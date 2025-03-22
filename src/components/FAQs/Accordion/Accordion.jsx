import { useState } from "react";
import styles from "./Accordion.module.css";
import chevronDown from "/icons/FAQs/chevron-down.svg";
import chevronUp from "/icons/FAQs/chevron-up.svg";
import { t } from "i18next";

export default function Accordion() {
  const [openId, setId] = useState(null);

  const faqList = t("FAQs.accordion", { returnObjects: true }); // Отримуємо масив FAQ

  const clickHandler = (id) => {
    if (id === openId) setId(null);
    else setId(id);
  };
  return (
    <ul className={styles.accordion}>
      {faqList?.map(({ id, question, answer }) => (
        <li
          key={id}
          className={styles.accordion_item}
          onClick={() => clickHandler(id)}
        >
          <div className={styles.accordion_header}>
            <h4 className={styles.questions}>{question}</h4>
            <img
              src={openId === id ? chevronUp : chevronDown}
              alt="chevron icon"
              className={styles.image}
            />
          </div>
          <div
            className={`${styles.accordion_collapse} ${
              id === openId ? styles.open : ""
            }`}
          >
            <p className={styles.answers}>{answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
