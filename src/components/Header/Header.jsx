import Container from "../shared/Container/Container";
import styles from "./Header.module.css";
import logo from "/public/icons/logo.svg";
import menu from "/public/icons/burger.svg";
import language from "/public/icons/language.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_container}>
          <ul className={styles.header_list}>
            <li className={styles.header_wrapper}>
              <img src={logo} alt="logo" className={styles.logo} />
              <p className={styles.logo_text}>Viki Reiki</p>
            </li>

            <li>
              <img src={menu} alt="burger menu" className={styles.menu_icon} />
            </li>
          </ul>

          <nav>
            <ul className={styles.menu_list}>
              <li>
                <p className={styles.menu_text}>About me</p>
              </li>
              <li>
                <p className={styles.menu_text}>Reiki Sessions</p>
              </li>
              <li>
                <p className={styles.menu_text}>Calendar</p>
              </li>
              <li>
                <p className={styles.menu_text}>FAQs</p>
              </li>
              <li>
                <p className={styles.menu_text}>Contact</p>
              </li>
              <li>
                <img src={language} alt="change language" />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
