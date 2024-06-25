import React from "react";

import nextArrow from "../../../assets/img/nextArrow.svg";

function NextArrow(props) {
  return (
    <button {...props} className="splide__arrow splide__arrow--next">
      <img src={nextArrow} alt="Next" />
    </button>
  );
}

export default NextArrow;
