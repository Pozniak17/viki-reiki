import styles from "./Accordion.module.css";
import chevronDown from "/icons/FAQs/chevron-down.svg";
import chevronUp from "/icons/FAQs/chevron-up.svg";
import { useState } from "react";

export default function Accordion({ faqList }) {
  const [openId, setId] = useState(null);

  const clickHandler = (id) => {
    if (id === openId) setId(null);
    else setId(id);
  };
  return (
    <ul className={styles.accordion}>
      {faqList.map((item) => (
        <li
          key={item.id}
          className={styles.accordion_item}
          onClick={() => clickHandler(item.id)}
        >
          <div className={styles.accordion_header}>
            <h4 className={styles.questions}>{item.questions}</h4>
            {openId === item.id ? (
              <img
                src={chevronUp}
                alt="chevron donw"
                className={styles.image}
              />
            ) : (
              <img
                src={chevronDown}
                alt="chevron donw"
                className={styles.image}
              />
            )}
          </div>
          <div
            className={`${styles.accordion_collapse} ${
              item.id === openId ? styles.open : ""
            }`}
          >
            <p className={styles.answers}>{item.answers}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
