import { Link } from "react-router-dom";

import styles from "../Home/Home.module.css";
import union from "../../assets/img/Union.svg";

function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        поиск провайдеров <br /> домашнего интернета <br /> по адресу
      </h1>
      <div className={styles.description}>
        <img src={union} alt="Локация" className={styles.location} />
        <Link to="/">ленинск-кузнецкий</Link>
      </div>
      <div className={styles.getLocation}>
        <Link to="/" className={styles.dotLocation}>
          поделитесь локацией
        </Link>{" "}
        <p>или введите адрес вручную</p>
      </div>
    </div>
  );
}

export default Home;
