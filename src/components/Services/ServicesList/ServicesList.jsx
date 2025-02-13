import services from "../../utils/json/services.json";
import ServicesCard from "../ServicesCard/ServicesCard";
import style from "./ServicesList.module.css";

export default function ServicesList() {
  return (
    <ul className={style.cardlist}>
      {services.map((item) => (
        <li key={item.id}>
          <ServicesCard image={item.image} text={item.text} />
        </li>
      ))}
    </ul>
  );
}
