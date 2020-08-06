import React, { useEffect } from "react";

import { RichText } from "prismic-reactjs";
import Markdown from "react-markdown";
import Prism from "prismjs";

const CodeSlice = ({ content }) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll();
  });
  
  const rawMarkdown = RichText.asText(content)
  return (
    <>
      <Markdown source={rawMarkdown} />
    </>
  );
};

export default CodeSlice;
