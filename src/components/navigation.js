import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import DropDown from "../components/DropDown/DropDown";

export default props => (
  <nav className="navigation">
    <Link to="/contact">Contact</Link>
    <ThemeChanger />
    <DropDown />
  </nav>
);
