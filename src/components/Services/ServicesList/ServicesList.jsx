import { useTranslation } from "react-i18next";
import services from "../../utils/json/services.json";
import ServicesCard from "../ServicesCard/ServicesCard";
import style from "./ServicesList.module.css";

export default function ServicesList() {
  const { t } = useTranslation();
  return (
    <ul className={style.cardlist}>
      {services.map(({ id, image }) => (
        <li key={id}>
          <ServicesCard
            image={image}
            title={t(`services.cards.servicesCard${id}.title`)}
            text={t(`services.cards.servicesCard${id}.text`)}
          />
        </li>
      ))}
    </ul>
  );
}
