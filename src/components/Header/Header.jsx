import Link from "../Link/Link";
import styles from "./Header.module.css";

import union from "../../assets/img/Union.svg";
import search from "../../assets/img/24px.svg";
import favorites from "../../assets/img/Union (Stroke) (Stroke).svg";

function Header() {
  return (
    <div className={styles.header}>
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
        <div className={styles.searchLink}>
          <img src={search} alt="Поиск" className={styles.searchLogo} />
        </div>
        <Link to="/">провайдеры</Link>
        <Link to="/">рейтинг</Link>
        <Link to="/">тарифы</Link>
        <Link to="/">акции</Link>
      </div>
      <div className={styles.favorites}>
        <img src={favorites} alt="Избранное" className={styles.favoritesLogo} />
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
