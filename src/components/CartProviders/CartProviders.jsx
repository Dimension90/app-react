import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { Link } from "react-router-dom";
import tgLogo from "../../assets/img/tgLogoCard.svg";
import vkLogo from "../../assets/img/vkLogoCard.svg";
import rostelecom from "../../assets/img/rostelecom.svg";
import beeline from "../../assets/img/beeline.svg";
import mts from "../../assets/img/mts.svg";
import goodline from "../../assets/img/goodline.svg";
import ttk from "../../assets/img/ttk.svg";
import megafon from "../../assets/img/megafon.svg";
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
      <div className={styles.cardProviders}>
        <Splide
          options={{
            rewind: true,
            perPage: 3,
            gap: "0",
            width: 1224,
            pagination: false,
          }}
        >
          <SplideSlide>
            <div className={styles.rostelecom}>
              <div className={styles.nameCompany}>Ростелеком</div>
              <div className={styles.logoRostelecom}>
                <img src={rostelecom} />
              </div>
              <div className={styles.stackColor}></div>
              <div className={styles.gradeCompany}>4,6</div>
              <div className={styles.countReview}>172 отзыва</div>
              <div className={styles.cardText}>
                домашний интернет, ТВ, мобильная связь
              </div>
              <div className={styles.cheapsetRate}>самый дешёвый тариф</div>
              <div className={styles.priceRate}>
                <div className={styles.price}>300</div>
              </div>
              <div className={styles.priceText}>₽/мес.</div>
              <div className={styles.speed}>
                <div className={styles.cheapsetRate}>
                  самая высокая скорость
                </div>
                <div className={styles.speedCount}>800</div>
                <div className={styles.speedText}>мбит/с</div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.rostelecom}>
              <div className={styles.nameCompany}>Билайн</div>
              <div className={styles.logoBeeline}>
                <img src={beeline} />
              </div>
              <div className={styles.stackColor}></div>
              <div className={styles.gradeCompany}>4,6</div>
              <div className={styles.countReview}>1k отзывов</div>
              <div className={styles.cardTextBeeline}>
                домашний интернет, мобильная связь, спутниковый интернет, ТВ
              </div>
              <div className={styles.cheapsetRateBeeline}>
                самый дешёвый тариф
              </div>
              <div className={styles.priceRate}>
                <div className={styles.price}>300</div>
              </div>
              <div className={styles.priceText}>₽/мес.</div>
              <div className={styles.speed}>
                <div className={styles.cheapsetRateBeeline}>
                  самая высокая скорость
                </div>
                <div className={styles.speedCount}>800</div>
                <div className={styles.speedText}>мбит/с</div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.rostelecom}>
              <div className={styles.nameCompany}>МТС</div>
              <div className={styles.logoBeeline}>
                <img src={mts} />
              </div>
              <div className={styles.stackColor}></div>
              <div className={styles.gradeCompany}>4,6</div>
              <div className={styles.countReview}>1k отзывов</div>
              <div className={styles.cardTextBeeline}>
                домашний интернет, мобильная связь, спутниковый интернет, ТВ
              </div>
              <div className={styles.cheapsetRateBeeline}>
                самый дешёвый тариф
              </div>
              <div className={styles.priceRate}>
                <div className={styles.price}>300</div>
              </div>
              <div className={styles.priceText}>₽/мес.</div>
              <div className={styles.speed}>
                <div className={styles.cheapsetRateBeeline}>
                  самая высокая скорость
                </div>
                <div className={styles.speedCount}>800</div>
                <div className={styles.speedText}>мбит/с</div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.rostelecom}>
              <div className={styles.nameCompany}>Гудлайн</div>
              <div className={styles.logoBeeline}>
                <img src={goodline} />
              </div>
              <div className={styles.stackColor}></div>
              <div className={styles.gradeCompany}>4,6</div>
              <div className={styles.countReview}>1k отзывов</div>
              <div className={styles.cardTextBeeline}>
                домашний интернет, мобильная связь, спутниковый интернет, ТВ
              </div>
              <div className={styles.cheapsetRateBeeline}>
                самый дешёвый тариф
              </div>
              <div className={styles.priceRate}>
                <div className={styles.price}>300</div>
              </div>
              <div className={styles.priceText}>₽/мес.</div>
              <div className={styles.speed}>
                <div className={styles.cheapsetRateBeeline}>
                  самая высокая скорость
                </div>
                <div className={styles.speedCount}>800</div>
                <div className={styles.speedText}>мбит/с</div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.rostelecom}>
              <div className={styles.nameCompany}>ТТК</div>
              <div className={styles.logoBeeline}>
                <img src={ttk} />
              </div>
              <div className={styles.stackColor}></div>
              <div className={styles.gradeCompany}>4,6</div>
              <div className={styles.countReview}>1k отзывов</div>
              <div className={styles.cardTextBeeline}>
                домашний интернет, мобильная связь, спутниковый интернет, ТВ
              </div>
              <div className={styles.cheapsetRateBeeline}>
                самый дешёвый тариф
              </div>
              <div className={styles.priceRate}>
                <div className={styles.price}>300</div>
              </div>
              <div className={styles.priceText}>₽/мес.</div>
              <div className={styles.speed}>
                <div className={styles.cheapsetRateBeeline}>
                  самая высокая скорость
                </div>
                <div className={styles.speedCount}>800</div>
                <div className={styles.speedText}>мбит/с</div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.rostelecom}>
              <div className={styles.nameCompany}>Мегафон</div>
              <div className={styles.logoBeeline}>
                <img src={megafon} />
              </div>
              <div className={styles.stackColor}></div>
              <div className={styles.gradeCompany}>4,6</div>
              <div className={styles.countReview}>1k отзывов</div>
              <div className={styles.cardTextBeeline}>
                домашний интернет, мобильная связь, спутниковый интернет, ТВ
              </div>
              <div className={styles.cheapsetRateBeeline}>
                самый дешёвый тариф
              </div>
              <div className={styles.priceRate}>
                <div className={styles.price}>300</div>
              </div>
              <div className={styles.priceText}>₽/мес.</div>
              <div className={styles.speed}>
                <div className={styles.cheapsetRateBeeline}>
                  самая высокая скорость
                </div>
                <div className={styles.speedCount}>800</div>
                <div className={styles.speedText}>мбит/с</div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Cards;
