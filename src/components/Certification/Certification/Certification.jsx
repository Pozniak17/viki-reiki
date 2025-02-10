import { useMediaQuery } from "react-responsive";
import Section from "../../shared/Section/Section";
import Title from "../../shared/Title/Title";
import styles from "./Certification.module.css";
import CertificationList from "../CertificationList/CertificationList";
import CertificationSlider from "../CertificationSlider/CertificationSlider";

export default function Certification() {
  const isTabletScreen = useMediaQuery({
    query: "(min-width: 744px) and (max-width: 1439px)",
  });

  return (
    <Section>
      <Title>Qualification and Certification</Title>
      <p className={styles.text}>
        I proudly share my Reiki Master certificate, along with achievements
        from other training events. May this inspire you to begin your own
        journey of growth and healing through Reiki.
      </p>

      {isTabletScreen ? <CertificationList /> : <CertificationSlider />}
    </Section>
  );
}
