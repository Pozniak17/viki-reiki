import data from "../../utils/card.json";
import Card from "../Card/Card";
import style from "./CardList.module.css";

export default function CardList() {
  return (
    <ul className={style.cardlist}>
      {data.map((item) => (
        <li key={item.id}>
          <Card image={item.image} text={item.text} />
        </li>
      ))}
    </ul>
  );
}
