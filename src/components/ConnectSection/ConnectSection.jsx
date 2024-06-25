import { Link } from "react-router-dom";

import styles from "../ConnectSection/ConnectSection.module.css";

function ConnectSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainText}>
        как подключить домашний <br /> интернет
      </div>
      <div className={styles.description}>
        легко — следуйте нашей инструкции и всё получится
      </div>
      <div className={styles.numberOne}>01</div>
      <div className={styles.numberTwo}>02</div>
      <div className={styles.numberThree}>03</div>
      <div className={styles.paragraphOne}>подберите провайдера</div>
      <div className={styles.paragraphTwo}>отправьте заявку</div>
      <div className={styles.paragraphThree}>согласуйте дату и время</div>
      <div className={styles.descriptionOne}>
        и тарифы по адресу вашего дома
      </div>
      <div className={styles.descriptionTwo}>
        на подключение прямо на сайте — менеджер свяжется с вами в течение 15
        минут
      </div>
      <div className={styles.descriptionThree}>
        когда вам удобно провести интернет
      </div>
      <div className={styles.call}>
        или позвоните +7 (800) 425-19-99, закажите обратный звонок, напишите в{" "}
        <Link to="/">вк</Link> или <Link to="/">телеграм</Link>
      </div>
    </div>
  );
}

export default ConnectSection;
