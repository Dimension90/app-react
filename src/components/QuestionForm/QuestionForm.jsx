import { useState } from "react";
import { Link } from "react-router-dom";

import arrowQuestion from "../../assets/img/arrowQuestion.svg";

import styles from "./QuestionForm.module.css";

function QuestionForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainText}>остались вопросы?</div>
      <div className={styles.description}>
        оставьте заявку и наш менеджер свяжется с вами в удобное время
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="как вас зовут?"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="tel"
          placeholder="+7 (999) 351-13-12"
          value={phone}
          onChange={handlePhoneChange}
        />
        <select value={time} onChange={handleTimeChange}>
          <option value="">в ближайшее время</option>
          <option value="morning">утро</option>
          <option value="afternoon">день</option>
          <option value="evening">вечер</option>
        </select>
        <button className={styles.buttonMain} type="submit">
          <div className={styles.buttonText}>
            отправить заявку
            <div className={styles.arrow}>
              <img src={arrowQuestion} />
            </div>
          </div>
        </button>
      </form>
    </div>
  );
}

export default QuestionForm;
