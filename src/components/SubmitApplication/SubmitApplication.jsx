import { useState } from "react";

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
        </button>
      </form>
    </div>
  );
}

export default SubmitApplication;
