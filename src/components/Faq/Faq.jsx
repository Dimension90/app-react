import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./Faq.module.css";

function Faq() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainText}>часто-задаваемые вопросы</div>
      <Splide
        options={{
          rewind: true,
          perPage: 3,
          width: "100%",
          gap: "32px",
          arrowPath:
            'M19.3225 1.69207C18.9364 1.30498 18.9364 0.677374 19.3225 0.29031C19.7085 -0.0967548 20.3344 -0.096785 20.7204 0.29031L31.7105 11.2991C32.0965 11.6862 32.0965 12.3138 31.7105 12.7009L20.7204 23.7097C20.3344 24.0968 19.7085 24.0968 19.3225 23.7097C18.9364 23.3226 18.9364 22.695 19.3225 22.3079L28.6249 12.9912H0.988544C0.442624 12.9912 0 12.5474 0 12C0 11.4526 0.442624 11.0088 0.988544 11.0088H28.6249L19.3225 1.69207Z" fill="#ffffff"',
          breakpoints: {
            992: {
              perPage: 2,
            },
            768: {
              perPage: 1,
            },
          },
          pagination: false,
        }}
      >
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.cardText}>
              почему лучше подключить <br />
              на <Link to="/">все_тарифы</Link>?
            </div>
            <div className={styles.description}>
              Бережем время и деньги. Даём полные сведения по тарифам: быстро и
              понятно.
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.cardTwo}>
            <div className={styles.cardTextTwo}>как пользоваться сервисом?</div>
            <div className={styles.descriptionTwo}>
              Введите адрес подключения в строку поиска на главной странице,
              чтобы посмотреть все доступные вам тарифы провайдеров.
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.cardThree}>
            <div className={styles.cardTextThree}>зачем указывать адрес?</div>
            <div className={styles.descriptionThree}>
              Чтобы мы могли проверить техничекую возможность подключения
              провайдеров в конкретном доме
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.cardText}>
              почему лучше подключить <br />
              на <Link to="/">все_тарифы</Link>?
            </div>
            <div className={styles.description}>
              Бережем время и деньги. Даём полные сведения по тарифам: быстро и
              понятно.
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.cardTwo}>
            <div className={styles.cardTextTwo}>как пользоваться сервисом?</div>
            <div className={styles.descriptionTwo}>
              Введите адрес подключения в строку поиска на главной странице,
              чтобы посмотреть все доступные вам тарифы провайдеров.
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.cardThree}>
            <div className={styles.cardTextThree}>зачем указывать адрес?</div>
            <div className={styles.descriptionThree}>
              Чтобы мы могли проверить техничекую возможность подключения
              провайдеров в конкретном доме
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Faq;
