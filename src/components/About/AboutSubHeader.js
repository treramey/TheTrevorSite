import React from "react";
import "../../styles/global.scss";

const AboutSubHeader = ({ text }) => {
  return (
    <sub class="primary-sub">
      <div
        class="primary-sub__word"
        // v-for="(word, index) in textArray"
        // :key="index"
        // @mouseover="wordActive($event.target)"
        on
      >
        <div class="primary-sub__top">{text}</div>
        <div class="primary-sub__bottom">{text}</div>
      </div>
    </sub>
  );
};

export default AboutSubHeader;
