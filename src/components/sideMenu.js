import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ThemeChanger from "../components/themeChanger";
import "../styles/global.scss";

const SideMenu = () => {
  const [navActive, setnavActive] = useState(false);

  return (
    <>
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
      <div className="navigation">
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
                duration={1}
                bg="var(--background)"
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
                to="/blog"
                cover
                direction="left"
                duration={1}
                bg="#1D1D1D"
                className="navigation__link"
              >
                <span>blog</span>
              </AniLink>
            </li>

            {/* <li
            className="navigation__item"
            onClick={() => setnavActive(!navActive)}
          >
            <AniLink
              to="/contact"
              className="navigation__link"
              cover
              direction="left"
              duration={1}
              bg="#1D1D1D"
            >
              <span>contact</span>
            </AniLink>
          </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
