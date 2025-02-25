import { useTranslation } from "react-i18next";
import Section from "../../shared/Section/Section";
import Title from "../../shared/Title/Title";
import FAQsData from "../../utils/json/FAQs.json";
// import chevron from "../../../../public/icons/FAQs/chevron.svg";
import Accordion from "../Accordion/Accordion";

export default function FAQs() {
  const { t } = useTranslation();
  return (
    <Section>
      <Title>{t("FAQs.title")}</Title>
      <Accordion faqList={FAQsData} />
    </Section>
  );
}
