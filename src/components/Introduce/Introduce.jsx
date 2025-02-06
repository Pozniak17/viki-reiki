import Section from "../shared/Section/Section";
import styles from "./Introduce.module.css";
import author from "../../../public/images/Introduce/author.jpg";

export default function Introduce() {
  return (
    <Section>
      <div className={styles.wrapper}>
        <img src={author} alt="Victoria author" className={styles.image} />

        <div>
          <h2 className={styles.title}>Viktoria Drachuk</h2>
          <p className={styles.text}>
            As a professional Reiki Master, I help to find balance and inner
            strength, leading people on the path of self-discovery through
            healing and support.
          </p>
          <div className={styles.button_wrapper}>
            <button className={styles.button_accent}>Schedule now</button>
            <button className={styles.button}>Service</button>
          </div>
        </div>
      </div>
    </Section>
  );
}
