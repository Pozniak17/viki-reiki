import styles from "./Registation.module.css";
import Section from "../../shared/Section/Section";
import Title from "../../shared/Title/Title";
import image from "../../../../public/images/Registation/Viktoria.jpg";
import RegistationForm from "../RegistationForm/RegistationForm";
import { useTranslation } from "react-i18next";

export default function Registation() {
  const { t } = useTranslation();
  return (
    <Section>
      <Title>{t("registration.title")}</Title>
      <div className={styles.wrapper}>
        <div>
          <img src={image} alt="Viktoria" className={styles.image} />
        </div>

        <div>
          <p className={styles.text}>{t("registration.text")}</p>
          <RegistationForm />
        </div>
      </div>
    </Section>
  );
}
