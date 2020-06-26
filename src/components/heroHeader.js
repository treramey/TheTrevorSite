import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { AwesomeButton } from "react-awesome-button";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "../styles/global.scss";
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.home.description,
          }}
        />
        <AniLink to="/contact" swipe top="exit" entryOffset={80}>
          <AwesomeButton type="secondary"> Get in touch &rarr;</AwesomeButton>
        </AniLink>
      </div>
    )}
  />
);
