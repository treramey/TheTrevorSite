import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

import Layout from "../components/layout";
import AboutHeader from "../components/About/AboutHeader";
import AboutSubHeader from "../components/About/AboutSubHeader";
import AboutButton from "../components/About/AboutButton";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <Layout>
      <div className="sectionWrapper">
        <div className="about">
          <AboutHeader />
          <AboutSubHeader text="I'm a software developer and designer. Follow my daily design work on Dribbble. You can also find me on Twitter, GitHub, and LinkedIn." />
          <AboutButton text="View Projects" />
        </div>
      </div>
      {/* <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <h2>Blog Posts &darr;</h2>
      <div className="grids">{Posts}</div> */}
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
