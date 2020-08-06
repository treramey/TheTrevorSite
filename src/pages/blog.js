import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

const ProjectPage = ({ data }) => {
  const blogs = data.prismic.allBlogs.edges;
  const Posts = blogs
    .sort((a, b) => b.release_date - a.release_date)
    .map(blog => <PostLink key={blog.node._meta.id} post={blog.node} />);

  console.log(Posts);
  return (
    <Layout>
      {/* <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet> */}
      <HeroHeader />
      <h2>Blog Posts &darr;</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default ProjectPage;
export const pageQuery = graphql`
  query BlogQuery {
    prismic {
      allBlogs {
        edges {
          node {
            _meta {
              uid
              id
            }
            title
            release_date
            featured_image
          }
        }
      }
    }
  }
`;
