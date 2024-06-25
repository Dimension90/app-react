import styles from "../Collections/Collections.module.css";
import AccordionComponent from "../Accordion/Accordion";
import collectionsImage from "../../assets/img/collections.webp";

function Collections() {
  const items = [
    {
      header: "🥇тарифы месяца",
      content: (
        <>
          <div className={styles.noLagsDescription}>
            глаз орла, реакция мангуста и быстрый <br /> интернет — в подборке
            игровых тарифов
          </div>
        </>
      ),
    },
    {
      header: "🤑самые доступные",
      content: (
        <>
          <div className={styles.noLagsDescription}>
            неограниченный интернет, <br /> бесплатные звонки и смс
          </div>
        </>
      ),
    },
    {
      header: "🦅 без ограничений",
      content: (
        <>
          <div className={styles.noLagsDescription}>
            глаз орла, реакция мангуста и быстрый <br /> интернет — в подборке
            игровых тарифов
          </div>
        </>
      ),
    },
    {
      header: "🎥 квент-и-и-ин та-ра-ра-нтино",
      content: (
        <>
          <div className={styles.noLagsDescription}>
            глаз орла, реакция мангуста и быстрый <br /> интернет — в подборке
            игровых тарифов
          </div>
        </>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.collections}>подборки</div>
      <div className={styles.wrapperImage}>
        <img src={collectionsImage} />
      </div>
      <AccordionComponent items={items} />
      <div className={styles.backgroundForm}></div>
    </div>
  );
}

export default Collections;
