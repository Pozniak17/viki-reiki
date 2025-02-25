import { useMediaQuery } from "react-responsive";

import Section from "../../shared/Section/Section";
import styles from "./Services.module.css";
import ServicesList from "../ServicesList/ServicesList";
import ServicesSlider from "../ServicesSlider/ServicesSlider";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const isTabletScreen = useMediaQuery({
    query: "(min-width: 744px) and (max-width: 1439px)",
  });
  return (
    <Section>
      <h2 className={styles.title}>{t("services.servicesTitle")}</h2>
      <p className={styles.text}>{t("services.servicesText")}</p>

      {isTabletScreen ? <ServicesList /> : <ServicesSlider />}
    </Section>
  );
}
