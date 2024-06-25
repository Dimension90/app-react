import { useState } from "react";
import { Link } from "react-router-dom";

import blueArrow from "../../assets/img/blueArrow.svg";

import styles from "../SubmitApplication/SubmitApplication.module.css";

function SubmitApplication() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundForm}>
        <div className={styles.textForm}>
          оставьте заявку и мы поможем <br /> подобрать тариф
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.name}>
          <input
            type="text"
            id="name"
            placeholder="как вас зовут?"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.phone}>
          <input
            type="tel"
            id="phone"
            placeholder="+7 (999) 351-13-12"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.findProviders}>
          <div className={styles.buttonText}>найти провайдеров</div>
          <div className={styles.arrowButton}>
            <img src={blueArrow} />
          </div>
        </button>
        <div className={styles.description}>
          нажимая на поиск я соглашаюсь с{" "}
          <ul>
            {" "}
            <Link to="/">условиями</Link>
          </ul>{" "}
          обработки персональных данных
        </div>
      </form>
      <div className={styles.call}>
        или позвоните <br />
        <div>+7 (800) 425-19-99</div> закажите обратный звонок напишите в{" "}
        <Link to="/">вк</Link> или <Link to="/">телеграм</Link>
      </div>
    </div>
  );
}

export default SubmitApplication;
