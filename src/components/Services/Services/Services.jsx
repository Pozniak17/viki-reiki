import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

import Section from "../../shared/Section/Section";
import styles from "./Services.module.css";
import ServicesList from "../ServicesList/ServicesList";
import ServicesSlider from "../ServicesSlider/ServicesSlider";

export default function Services() {
  const { t } = useTranslation();
  const isTabletScreen = useMediaQuery({
    query: "(min-width: 744px) and (max-width: 1439px)",
  });
  return (
    <Section>
      <h2 id="services" className={styles.title}>
        {t("services.servicesTitle")}
      </h2>
      <p className={styles.text}>{t("services.servicesText")}</p>

      {isTabletScreen ? <ServicesList /> : <ServicesSlider />}
    </Section>
  );
}
