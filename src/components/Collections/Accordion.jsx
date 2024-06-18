import React, { useState } from "react";
import styles from "../Collections/Accordion.module.css";

function AccordionComponent({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div
            className={styles.accordionHeader}
            onClick={() => handleClick(index)}
          >
            {item.header}
          </div>
          {activeIndex === index && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AccordionComponent;
