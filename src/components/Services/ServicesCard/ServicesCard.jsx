import styles from "./ServicesCard.module.css";

export default function ServicesCard({ image, text }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={image} alt="author photo" className={styles.image} />
        <div className={styles.card_wrapper}>
          <h3 className={styles.card_title}>Individual Session</h3>
          <span className={styles.card_price}>60 €</span>
        </div>
        <p className={styles.text}>{text}</p>
      </div>

      <button className={styles.button}>Open to read</button>
    </div>
  );
}
