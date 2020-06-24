import React from "react";
import { Link } from "gatsby";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import { AwesomeButton } from "react-awesome-button";

import "../../styles/global.scss";

const AboutButton = ({ text }) => {
  return (
    <div className="about_button">
      <Link to="/blog" cover direction="left" duration={1} bg="#1D1D1D">
        {/* <button className="button__top">{text}</button>
      <button className="button__bottom">{text}</button> */}
        <div className="about_button__bottom">
          <AwesomeButton>{text}</AwesomeButton>
        </div>
      </Link>
    </div>
  );
};

export default AboutButton;
