import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import SocialLinks from "./SocialLinks";
import SideMenu from "../components/sideMenu";
// import Headroom from "react-headroom";

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
    <div>
        <header className="site-header">
          <div className="site-title">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <Navigation />
          <SideMenu />
        </header>
      
      <main>
        <div className="site-wrapper">
          <SocialLinks />
          {children}
          <footer className="footer">
            <div className="footer__item">
              <span>{new Date().getFullYear()} Trevor Ramey</span>
              <span>Looking to start a project? Let's talk</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};
