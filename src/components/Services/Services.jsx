import { useMediaQuery } from "react-responsive";

import Section from "../shared/Section/Section";
import styles from "./Services.module.css";
import SliderCardList from "../CardList/SliderCardList/SliderCardList";
import CardList from "../CardList/CardList/CardList";

export default function Services() {
  const isTabletScreen = useMediaQuery({
    query: "(min-width: 744px) and (max-width: 1439px)",
  });
  return (
    <Section>
      <h2 className={styles.title}>Healing Services Offered</h2>
      <p className={styles.text}>
        These are the different ways I can support your wellness journey.
      </p>

      {isTabletScreen ? <CardList /> : <SliderCardList />}
    </Section>
  );
}
