import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

import styles from "../AdressForm/AdressForm.module.css";

function AdressForm() {
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [building, setBuilding] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.item}>
        <label htmlFor="street" className={styles.label}>
          Улица
        </label>
        <select
          id="street"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
          className={styles.input}
        >
          <option value="">Выберите улицу</option>
          <option value="Ленина">Ленина</option>
          <option value="Кирова">Кирова</option>
          <option value="Советская">Советская</option>
        </select>
      </div>

      <div className={styles.item}>
        <label htmlFor="house" className={styles.label}>
          Дом
        </label>
        <input
          type="text"
          id="house"
          value={house}
          onChange={(event) => setHouse(event.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.item}>
        <label htmlFor="building" className={styles.label}>
          Тип дома
        </label>
        <select
          id="building"
          value={building}
          onChange={(event) => setBuilding(event.target.value)}
          className={styles.input}
        >
          <option value="">Выберите тип дома</option>
          <option value="Жилой дом">Жилой дом</option>
          <option value="Коттедж">Коттедж</option>
          <option value="Апартаменты">Апартаменты</option>
        </select>
      </div>

      <Link to="/" className={styles.linkButton}>
        найти провайдеров
      </Link>
    </form>
  );
}

export default AdressForm;
