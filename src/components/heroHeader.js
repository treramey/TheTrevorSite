import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { AwesomeButton } from "react-awesome-button";
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
        <Link to="/contact" className="button -primary">
          <AwesomeButton type="secondary"> Get in touch &rarr;</AwesomeButton>
        </Link>
      </div>
    )}
  />
);
