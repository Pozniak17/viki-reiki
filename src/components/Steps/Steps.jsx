import Section from "../shared/Section/Section";
import Title from "../shared/Title/Title";
import styles from "./Steps.module.css";
import meditate from "../../../public/images/Steps/meditate.jpg";

export default function Steps() {
  return (
    <Section>
      <Title>How does Reiki Practice Works</Title>
      <p className={styles.text}>
        Reiki is an energy healing practice that promotes relaxation, balance,
        and healing by channeling life force energy.
      </p>

      <div className={styles.wrapper}>
        <img src={meditate} alt="meditate" className={styles.image} />

        <ul className={styles.steps_list}>
          <li className={styles.steps_item}>
            <span className={styles.steps_number}>1</span>
            <div>
              <h3 className={styles.steps_title}>Book an appointment</h3>
              <p className={styles.steps_text}>
                This step will help you make yourself known and receive valuable
                feedback.
              </p>
            </div>
          </li>
          <li className={styles.steps_item}>
            <span className={styles.steps_number}>2</span>
            <div>
              <h3 className={styles.steps_title}>
                Receive your tailored consultation
              </h3>
              <p className={styles.steps_text}>
                This step provides you with personalized insights and expert
                guidance to address your unique needs and goals.
              </p>
            </div>
          </li>
          <li className={styles.steps_item}>
            <span className={styles.steps_number}>3</span>
            <div>
              <h3 className={styles.steps_title}>Ongoing and circular care</h3>
              <p className={styles.steps_text}>
                Experience continuous, interconnected support designed to
                nurture and sustain your well-being over time.
              </p>
            </div>
          </li>

          <li className={styles.steps_item}>
            <span className={styles.steps_number}>4</span>
            <div>
              <h3 className={styles.steps_title}>
                Begin your treatment and program
              </h3>
              <p className={styles.steps_text}>
                Take the first step toward achieving your goals with a
                personalized plan designed just for you.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
}
