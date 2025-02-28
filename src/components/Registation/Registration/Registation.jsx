import styles from "./Registation.module.css";
import Section from "../../shared/Section/Section";
import Title from "../../shared/Title/Title";
// import image from "../../../../public/images/Registation/Viktoria.jpg";
import RegistationForm from "../RegistationForm/RegistationForm";
import { useTranslation } from "react-i18next";

export default function Registation() {
  const { t } = useTranslation();
  return (
    <Section>
      <Title>{t("registration.title")}</Title>
      <div className={styles.wrapper}>
        <div>
          {/* <img src={image} alt="Viktoria" className={styles.image} /> */}
          <picture>
            <source
              srcSet="/images/Registation/Desktop/Registration-desktop-1x.jpg 1x, /images/Registation/Desktop/Registration-desktop-2x.jpg 2x"
              media="(min-width: 1440px)"
            />
            <source
              srcSet="/images/Registation/Tablet/Registration-tablet-1x.jpg 1x, /images/Registation/Tablet/Registration-tablet-2x.jpg 2x"
              media="(min-width: 744px)"
            />
            <source
              srcSet="/images/Registation/Mobile/Registration-mobile-1x.jpg 1x, /images/Registation/Mobile/Registration-mobile-2x.jpg 2x"
              media="(max-width: 743px)"
            />
            <img
              src="/images/Registation/Desktop/Registration-desktop-1x.jpg"
              alt="Viktoria"
              className={styles.image}
            />
          </picture>
        </div>

        <div>
          <p className={styles.text}>{t("registration.text")}</p>
          <RegistationForm />
        </div>
      </div>
    </Section>
  );
}
