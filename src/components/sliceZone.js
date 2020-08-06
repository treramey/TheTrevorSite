import React from "react";
import { RichText } from "prismic-reactjs";


const SliceZone = ({body}) => {
    console.log(body)
    return (
        <>
          {body &&
            body.map((bodyContent, i) => {
                console.log(bodyContent.type);
              switch (bodyContent.type) {
                case "text":
                  return (
                      <div className="blog-post-content" >
                          <RichText render={bodyContent.primary.blog_paragraph}/>
                      </div>
                    // <CodeSlice key={i} content={bodyContent.primary.code} />
                  )
                case "code":
                  return (
                      <div></div>
                    // <CodeSlice key={i} content={bodyContent.primary.code} />
                  )
                default:
                  return null
              }
            })}
        </>
      )
};

export default SliceZone