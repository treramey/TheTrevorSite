import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import Contact from "./Contact/contact";

import "prismjs/themes/prism-okaidia.css";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <Contact />
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer class="footer">
        <div class="footer__item">
          <span>{new Date().getFullYear()} Trevor Ramey</span>
          <span>Looking to start a project? Let's talk</span>
        </div>
      </footer>
    </div>
  );
};
