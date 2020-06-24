import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../../styles/global.scss";

const Navigation = () => {
  const [navActive, setnavActive] = useState(false);

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="nav_toggle"
        onClick={() => setnavActive(!navActive)}
        checked={navActive}
      />
      <label for="nav_toggle" className="navigation__button">
        <div className="navigation__line"></div>
        <div className="navigation__line"></div>
        <div className="navigation__line"></div>
      </label>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li
            className="navigation__item"
            onClick={() => setnavActive(!navActive)}
          >
            <AniLink
              to="/"
              cover
              direction="left"
              duration={2}
              bg="#1D1D1D"
              className="navigation__link"
            >
              <span>about</span>
            </AniLink>
          </li>

          <li
            className="navigation__item"
            onClick={() => setnavActive(!navActive)}
          >
            <AniLink
              to="/projects"
              cover
              direction="left"
              duration={2}
              bg="#1D1D1D"
              className="navigation__link"
            >
              <span>portfolio</span>
            </AniLink>
          </li>

          <li
            className="navigation__item"
            onClick={() => setnavActive(!navActive)}
          >
            <AniLink
              to="/contact"
              className="navigation__link"
              cover
              direction="left"
              duration={2}
              bg="#1D1D1D"
            >
              <span>contact</span>
            </AniLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
