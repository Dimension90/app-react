import React from "react";
import Slider from "../Slider/Slider";

import { Link } from "react-router-dom";
import tgLogo from "../../assets/img/tgLogoCard.svg";
import vkLogo from "../../assets/img/vkLogoCard.svg";

import styles from "../CartProviders/CartProviders.module.css";

function Cards() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.citySelect}>
        <div className={styles.allProviders}>все провайдеры</div>
        <select className={styles.cityProviders}>
          <option value="">кемерово</option>
        </select>
      </div>
      <div className={styles.card}>
        <div className={styles.textLogo}>все_тарифы</div>
        <div className={styles.textCart}>
          поможем выбрать провайдера: <br /> быстро, легко и бесплатно
        </div>
        <div className={styles.textBestProvider}>
          подобрать лучшего <br /> провайдера
        </div>
        <div className={styles.phoneText}>
          <div>+7 (800) 425-19-99</div>
          <div className={styles.logoWrapper}>
            <Link to="/">
              <div className={styles.logo}>
                <img src={tgLogo} />
                <img src={vkLogo} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Cards;
