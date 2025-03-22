import { useTranslation } from "react-i18next";
import Section from "../../shared/Section/Section";
import Title from "../../shared/Title/Title";
import Accordion from "../Accordion/Accordion";

export default function FAQs() {
  const { t } = useTranslation();
  return (
    <Section>
      <div id="FAQs">
        <Title>{t("FAQs.title")}</Title>
        <Accordion />
      </div>
    </Section>
  );
}
