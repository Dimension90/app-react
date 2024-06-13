import Link from "../Link/Link";
import styles from "./Header.module.css";

import union from "../../assets/img/Union.svg";
import search from "../../assets/img/24px.svg";
import favorites from "../../assets/img/Union (Stroke) (Stroke).svg";
import background from "../../assets/img/background.svg";

function Header() {
  return (
    <div className={styles.header}>
      {/* <div className={styles.background}>
        <img src={background} />
      </div> */}
      <div className={styles.logo}>
        <div className={styles.logoBackground}></div>
        <Link to="/">
          все_ <br />
          тарифы
        </Link>
      </div>
      <div className={styles.location}>
        <img src={union} alt="Локация" className={styles.locationLogo} />
        <Link to="/">кемерово</Link>
      </div>
      <div className={styles.menu}>
        <div className={styles.searchWrapper}>
          <img src={search} alt="Поиск" className={styles.searchLogo} />
          <Link to="/">провайдеры</Link>
        </div>
        <Link to="/">рейтинг</Link>
        <Link to="/">тарифы</Link>
        <Link to="/">акции</Link>
      </div>

      <div className={styles.favorites}>
        <div className={styles.favoritesHeart}>
          <img
            src={favorites}
            alt="Избранное"
            className={styles.favoritesLogo}
          />
        </div>
        <Link to="/">избранное</Link>
      </div>
      <div className={styles.phone}>
        <div className={styles.phoneLink}>
          <Link to="/">+7 (800) 425-19-99</Link>
        </div>
        <div className={styles.callLink}>
          <Link to="/" className={styles.callLink}>
            перезвоните мне
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
