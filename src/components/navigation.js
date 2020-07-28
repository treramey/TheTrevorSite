import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import { slide as Menu } from 'react-burger-menu'
import style from 'styled-components'


export default props => (
  <nav className="navigation">
    <Link to="/">About</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger />
    <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
  </nav>
);
