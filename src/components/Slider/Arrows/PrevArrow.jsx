import React from "react";

import prevArrow from "../../../assets/img/prevArrow.svg";

function PrevArrow(props) {
  return (
    <button {...props} className="splide__arrow splide__arrow--prev">
      <img src={prevArrow} />
    </button>
  );
}

export default PrevArrow;
