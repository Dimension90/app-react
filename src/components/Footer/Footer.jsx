import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import VKLogo from "../../assets/img/VKLogo.svg";
import TelegramLogo from "../../assets/img/TelegramLogo.svg";
import support from "../../assets/img/support.svg";
import mail from "../../assets/img/mail.svg";
import arrow from "../../assets/img/arrow.svg";
import makelogo from "../../assets/img/makelogo.svg";

function Footer() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Link to="/">
          <div className={styles.textLogo}>
            все_ <br />
            тарифы
          </div>
        </Link>
        <div className={styles.logo}>
          <div className={styles.logoBackground}></div>
        </div>
        <div className={styles.supportWidth}>
          <div className={styles.supportContacts}>
            <Link to="/">+7 (800) 425-19-99</Link>
          </div>
          <div className={styles.connectionIssues}>
            <p>По вопросам подключения</p>
          </div>
          <div className={styles.phoneSupports}>
            <Link to="/">номера технической поддержки</Link>
            <img src={support} className={styles.supportLogo} />
          </div>
          <div className={styles.feedback}>
            <Link to="/">обратная связь</Link>
            <img src={mail} className={styles.mailLogo} />
          </div>
        </div>
        <Link to="/" className={styles.buttonSubmit}>
          отправить заявку
          <div className={styles.arrow}>
            <img src={arrow} />
          </div>
        </Link>
        <div className={styles.reference}>
          <p>
            Информация на сайте носит справочный характер и не является
            публичной офертой
          </p>
        </div>
      </div>
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
        <div className={styles.makeLogo}>
          <Link to="/">
            <img src={makelogo} />
          </Link>
          <Link to="/">мэйк — создание сайта</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
