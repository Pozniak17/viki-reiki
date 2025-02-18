import styles from "./Registation.module.css";
import Section from "../../shared/Section/Section";
import Title from "../../shared/Title/Title";
import image from "../../../../public/images/Registation/Viktoria.jpg";
import RegistationForm from "../RegistationForm/RegistationForm";

export default function Registation() {
  return (
    <Section>
      <Title>Register for the Session</Title>
      <div className={styles.wrapper}>
        <div>
          <img src={image} alt="Viktoria" className={styles.image} />
        </div>

        <div>
          <p className={styles.text}>
            Let’s Get Started! Claim Your 30-Minute Free Consultation Today
          </p>
          <RegistationForm />
        </div>
      </div>
    </Section>
  );
}
