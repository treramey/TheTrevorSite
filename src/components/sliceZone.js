import React from "react";
import { RichText } from "prismic-reactjs";
import CodeSlice from './CodeSlice'


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
                      <div key={i} className="blog-post-content" >
                          <RichText  render={bodyContent.primary.blog_paragraph}/>
                      </div>
                  )
                case "code":
                  return (
                    <div key={i} className="blog-post-content" >

                      <CodeSlice key={i} content={bodyContent.primary.code_snippet} />
                    </div>
                  )
                default:
                  return null
              }
            })}
        </>
      )
};

export default SliceZone