import styles from "./BenefitsTablet.module.css";
import ellipse from "../../../../public/images/Benefits/ellipse.png";
import tabletText from "../../../../public/images/Benefits/Tablet/tablet-text.png";

export default function BenefitsTablet() {
  return (
    <div className={styles.tablet}>
      <img src={ellipse} alt="meditation" className={styles.ellipse} />
      <img src={tabletText} alt="meditation" className={styles.imageText} />
    </div>
  );
}
