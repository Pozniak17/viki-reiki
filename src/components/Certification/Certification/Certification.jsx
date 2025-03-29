import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import Section from "../../shared/Section/Section";
import Title from "../../shared/Title/Title";
import styles from "./Certification.module.css";
import CertificationList from "../CertificationList/CertificationList";
import CertificationSlider from "../CertificationSlider/CertificationSlider";

export default function Certification() {
  const { t } = useTranslation();
  const isTabletScreen = useMediaQuery({
    query: "(min-width: 744px) and (max-width: 1439px)",
  });

  return (
    <Section>
      <Title>{t("certification.title")}</Title>
      <p className={styles.text}>{t("certification.text")}</p>
      {isTabletScreen ? <CertificationList /> : <CertificationSlider />}
    </Section>
  );
}
