import styles from "./Hero.module.css";
import leaves from "../../../public/images/Hero/leaves.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_circle}>
        <h1 className={styles.hero_title}>Reiki Master</h1>
        <h2 className={styles.hero_text}>
          Take the First Step Toward Your Health and Happiness
        </h2>
        <button className={styles.hero_button}>Start Your Journey</button>
        <img src={leaves} alt="leaves" className={styles.hero_image} />
      </div>
    </section>
  );
}
