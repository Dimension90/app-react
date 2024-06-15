import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import arrow from "../../assets/img/arrow.svg";

import styles from "../AdressForm/AdressForm.module.css";

function AdressForm() {
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [building, setBuilding] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.street}>
            <label htmlFor="street" className={styles.label}></label>
            <select
              id="street"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
              className={styles.input}
            >
              <option value="selectStreet">улица:</option>
              <option value="Ленина">улица: Ленина</option>
              <option value="Проспект">проспект: Ленина</option>
              <option value="Ленинградский">ленинградский проспект</option>
            </select>
          </div>

          <div className={styles.house}>
            <label htmlFor="house" className={styles.label}></label>
            <select
              id="house"
              value={house}
              onChange={(event) => setHouse(event.target.value)}
              className={styles.input}
            >
              <option value="selectHouse">дом:</option>
              <option value="1">дом: 121/1А</option>
              <option value="2">дом: 122/2А</option>
              <option value="3">дом: 123/3А</option>
            </select>
          </div>

          <div className={styles.building}>
            <label htmlFor="building" className={styles.label}></label>
            <select
              id="building"
              value={building}
              onChange={(event) => setBuilding(event.target.value)}
              className={styles.input}
            >
              <option value="">тип дома</option>
              <option value="многоквартирный">многоквартирный дом</option>
              <option value="Жилой дом">жилой дом</option>
              <option value="Коттедж">коттедж</option>
              <option value="Апартаменты">апартаменты</option>
            </select>
          </div>

          <Link to="/" className={styles.linkButton}>
            <div className={styles.arrow}>
              <img src={arrow} />
            </div>
            <span>найти провайдеров</span>
          </Link>
        </form>
        <div className={styles.formText}>
          расскажем о всех <br /> особенностях провайдеров <br /> и тарифов
        </div>
        <div className={styles.personInfo}>
          <Link to="/">условиями</Link>
        </div>
        <div className={styles.confirmInfo}>
          <p>нажимая на поиск я соглашаюсь с обработки персональных данных</p>
        </div>
        <div className={styles.marquee}>быстро_честно_бесплатно</div>
      </div>
    </>
  );
}

export default AdressForm;
