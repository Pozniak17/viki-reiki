import { useTranslation } from "react-i18next";
import services from "../../utils/json/services.json";
import ServicesCard from "../ServicesCard/ServicesCard";
import style from "./ServicesList.module.css";

export default function ServicesList() {
  const { t } = useTranslation();
  return (
    <ul className={style.cardlist}>
      {services.map(({ id, image, url }) => (
        <li key={id}>
          <ServicesCard
            url={url}
            image={image}
            title={t(`services.cards.servicesCard${id}.title`)}
            text={t(`services.cards.servicesCard${id}.text`)}
          />
        </li>
      ))}
    </ul>
  );
}
