import styles from "./BenefitsMobile.module.css";
import ellipse from "../../../../public/images/Benefits/ellipse.png";
import mobileText from "../../../../public/images/Benefits/Mobile/mobile-text.png";

export default function BenefitsMobile() {
  return (
    <div className={styles.mobile}>
      <img src={ellipse} alt="meditation" className={styles.ellipse} />
      <img src={mobileText} alt="meditation" className={styles.imageText} />
    </div>
  );
}
