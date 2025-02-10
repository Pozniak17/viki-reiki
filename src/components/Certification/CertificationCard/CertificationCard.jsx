import styles from "./CertificationCard.module.css";

export default function CertificationCard({ image, text }) {
  return (
    <div className={styles.card_item}>
      <img src={image} alt="certificate" className={styles.image} />
      <p className={styles.card_text}>{text}</p>
    </div>
  );
}
