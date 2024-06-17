import styles from "../Collections/Collections.module.css";

import collectionsImage from "../../assets/img/collections.svg";

function Collections() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.collections}>подборки</div>
      <div className={styles.wrapperImage}>
        <img src={collectionsImage} />
      </div>
      <div className={styles.rateMonthlyWrapper}>
        <div className={styles.rateMonthly}>🥇тарифы месяца</div>{" "}
        <div className={styles.theMost}>🤑самые доступные</div>{" "}
        <div className={styles.noLags}>🦅 без лагов</div>{" "}
        <div className={styles.noLagsDescription}>
          глаз орла, реакция мангуста и быстрый <br /> интернет — в подборке
          игровых тарифов
        </div>
        <div className={styles.kventi}>🎥 квент-и-и-ин та-ра-ра-нтино</div>{" "}
      </div>
    </div>
  );
}

export default Collections;
