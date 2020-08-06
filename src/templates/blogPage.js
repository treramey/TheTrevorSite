import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { RichText, Date as ParseDate } from "prismic-reactjs";
import Layout from "../components/layout";
import SliceZone from "../components/sliceZone";

const BlogPage = ({ data }) => {
  const blog = data.prismic.allBlogs.edges[0].node;
  //   const { siteMetadata } = site;

  var formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(ParseDate(blog.release_date));
  // Outputs the date in Mon dd, YYYY format
  //   console.log(siteMetadata);
  console.log(data);
  return (
    <Layout>
      {/* <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet> */}
      <div className="blog-post-container">
        <article className="post">
          {!blog.featured_image && (
            <div className="post-thumbnail">
              <h1 className="post-title">{RichText.asText(blog.title)}</h1>
              <div className="post-meta">{formattedDate}</div>
            </div>
          )}
          {!!blog.featured_image && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${blog.featured_image.url})` }}
            >
              <h1 className="post-title">{RichText.asText(blog.title)}</h1>
              <div className="post-meta">{formattedDate}</div>
            </div>
          )}

          <SliceZone body={blog.body} />
        </article>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query PageQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    prismic {
      allBlogs(id: $id) {
        edges {
          node {
            featured_image
            title
            release_date
            body {
              ... on PRISMIC_BlogBodyText {
                type
                primary {
                    blog_paragraph
                }
              }
              ... on PRISMIC_BlogBodyText1 {
                type
                primary {
                  code
                }
              }
              ... on PRISMIC_BlogBodyAlert {
                type
              }
            }
            _meta {
              id
              uid
            }
          }
        }
      }
    }
  }
`;
