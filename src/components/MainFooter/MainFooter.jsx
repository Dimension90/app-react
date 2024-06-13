import { Link } from "react-router-dom";

import styles from "../MainFooter/MainFooter.module.css";

import support from "../../assets/img/support.svg";
import mail from "../../assets/img/mail.svg";

function MainFooter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <div className={styles.logoBackground}></div>
        <Link to="/">
          <div className={styles.textLogo}>
            все_ <br />
            тарифы
          </div>
        </Link>
      </div>
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
  );
}

export default MainFooter;
