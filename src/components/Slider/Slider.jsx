import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import NextArrow from "../Slider/Arrows/NextArrow";
import PrevArrow from "../Slider/Arrows/PrevArrow";

import "@splidejs/react-splide/css";

import rostelecom from "../../assets/img/rostelecom.svg";
import beeline from "../../assets/img/beeline.svg";
import mts from "../../assets/img/mts.svg";
import goodline from "../../assets/img/goodline.svg";
import ttk from "../../assets/img/ttk.svg";
import megafon from "../../assets/img/megafon.svg";

import "../Slider/Slider.css";
import styles from "../CartProviders/CartProviders.module.css";

function Slider() {
  return (
    <div className={styles.cardProviders}>
      <Splide
        options={{
          arrowPath:
            'M19.3225 1.69207C18.9364 1.30498 18.9364 0.677374 19.3225 0.29031C19.7085 -0.0967548 20.3344 -0.096785 20.7204 0.29031L31.7105 11.2991C32.0965 11.6862 32.0965 12.3138 31.7105 12.7009L20.7204 23.7097C20.3344 24.0968 19.7085 24.0968 19.3225 23.7097C18.9364 23.3226 18.9364 22.695 19.3225 22.3079L28.6249 12.9912H0.988544C0.442624 12.9912 0 12.5474 0 12C0 11.4526 0.442624 11.0088 0.988544 11.0088H28.6249L19.3225 1.69207Z" fill="#ffffff"',
          rewind: true,
          arrows: true,
          perPage: 3,
          gap: "0",
          width: 1224,
          pagination: false,
          prev: "<PrevArrow />",
          next: "<NextArrow />",
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
              <div className={styles.cheapsetRate}>самая высокая скорость</div>
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
  );
}

export default Slider;
