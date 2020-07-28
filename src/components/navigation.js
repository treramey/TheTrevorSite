import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";


export default props => (
  
  <nav className="navigationLinks">
    <Link to="/">About</Link>
    <Link to="/blog">Blog</Link>
    <div>
      <ThemeChanger />
    </div>
  </nav>
 
);
