import Section from "../../shared/Section/Section";
import Title from "../../shared/Title/Title";
import FAQsData from "../../utils/json/FAQs.json";
// import chevron from "../../../../public/icons/FAQs/chevron.svg";
import Accordion from "../Accordion/Accordion";

export default function FAQs() {
  return (
    <Section>
      <Title>FAQs</Title>
      <Accordion faqList={FAQsData} />
    </Section>
  );
}
