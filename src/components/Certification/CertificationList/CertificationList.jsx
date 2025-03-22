import CertificationCard from "../CertificationCard/CertificationCard";
import styles from "./CertificationList.module.css";
import certificates from "../../utils/json/certificates.json";
import { t } from "i18next";

export default function CertificationList() {
  return (
    <ul className={styles.cardlist}>
      {certificates.map(({ id, image }) => (
        <li key={id}>
          <CertificationCard
            image={image}
            text={t(`certification.cards.certificationCard${id}`)}
          />
        </li>
      ))}
    </ul>
  );
}
