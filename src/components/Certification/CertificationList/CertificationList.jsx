import CertificationCard from "../CertificationCard/CertificationCard";
import styles from "./CertificationList.module.css";
import certificates from "../../utils/json/certificates.json";

export default function CertificationList() {
  return (
    <ul className={styles.cardlist}>
      {certificates.map((item) => (
        <li key={item.id}>
          <CertificationCard image={item.image} text={item.text} />
        </li>
      ))}
    </ul>
  );
}
