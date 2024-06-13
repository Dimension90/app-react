import React, { useState } from "react";
import Link from "../Link/Link";
import { slide as Menu } from "react-burger-menu";

import styles from "./Header.module.css";

import union from "../../assets/img/Union.svg";
import search from "../../assets/img/24px.svg";
import favorites from "../../assets/img/Union (Stroke) (Stroke).svg";
import burger from "../../assets/img/burger.svg";
import background from "../../assets/img/background.svg";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.logoBackground}></div>
        <div className={styles.logo}>
          все_ <br />
          тарифы
        </div>
      </Link>
      <div className={styles.location}>
        <img src={union} alt="Локация" className={styles.locationLogo} />
        <Link to="/" className={styles.city}>
          кемерово
        </Link>
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
      <Menu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        customBurgerIcon={<img src={burger} alt="Burger Menu" />}
      >
        <Link to="/" onClick={toggleMenu}>
          провайдеры
        </Link>
        <Link to="/" onClick={toggleMenu}>
          рейтинг
        </Link>
        <Link to="/" onClick={toggleMenu}>
          тарифы
        </Link>
        <Link to="/" onClick={toggleMenu}>
          акции
        </Link>
        <Link to="/" onClick={toggleMenu}>
          избранное
        </Link>
        <Link to="/" onClick={toggleMenu}>
          +7 (800) 425-19-99
        </Link>
        <Link to="/" onClick={toggleMenu} className={styles.callLink}>
          перезвоните мне
        </Link>
      </Menu>
    </div>
  );
}

export default Header;
