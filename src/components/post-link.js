import React from "react";
import { Link } from "gatsby";
import { RichText,Date as ParseDate} from "prismic-reactjs";

const PostLink = ({ post }) => {
  console.log(post);

  var formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(ParseDate(post.release_date));
  return (
    <article className="card ">
      <Link to={`/blog/${post._meta.uid}`}>
        {!!post.featured_image && (
          <img
            src={post.featured_image.url}
            alt={RichText.asText(post.title) + "- Featured Shot"}
          />
        )}
      </Link>
      <header>
        <h2 className="post-title">
          <Link to={`/blog/${post._meta.uid}`} className="post-link">
          {RichText.asText(post.title)}
          </Link>
        </h2>
        <div className="post-meta">{formattedDate}</div>
      </header>
    </article>
  );
};

export default PostLink;
