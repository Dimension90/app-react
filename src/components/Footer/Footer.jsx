import { Link } from "react-router-dom";

import styles from "../Footer/Footer.module.css";
import VKLogo from "../../assets/img/VKLogo.svg";
import TelegramLogo from "../../assets/img/TelegramLogo.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.textFooter}>
        <Link to="/">©2023 Симка.онлайн.ru</Link>
        <Link to="/">Политика обработки персональных данных</Link>
        <Link to="/">Соответствие требованиям ФЗ 152</Link>
        <Link to="/">Блог</Link>
      </div>
      <div className={styles.imgFooter}>
        <Link>
          <img src={VKLogo} />
        </Link>
        <Link>
          <img src={TelegramLogo} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
