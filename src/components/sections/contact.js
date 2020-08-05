import React, { useEffect, useRef } from "react";
// import sr from '@utils/sr';
// import { srConfig, email } from '@config';
import styled from "styled-components";
import { AwesomeButton } from "react-awesome-button";
// import { theme, mixins, media, Section, Heading } from '@styles';
// const { colors, fontSizes, fonts } = theme;
import media from "../../styles/OtherStyles/media";

const StyledContainer = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;
  ${media.tablet`padding: 100px 0;`};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    color: var(--primary-color);
    &:hover,
    &:focus,
    &:active {
      color: var(--primary-color);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--primary-color) !important;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
`;
const StyledHeading = styled.h3`
  display: block;
  color: var(--primary-color);
  font-size: 18px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: 16px;`};
  &:before {
    bottom: 0;
    font-size: 16px;
    ${media.desktop`font-size: 13px;`};
  }
  &:after {
    display: none;
  }
`;
const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;
const StyledEmailLink = styled.a`
  margin-top: 50px;
`;

const Contact = ({ data }) => {
  //   const revealContainer = useRef(null);
  //   useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="contact">
      <StyledHeading>What&apos;s Next?</StyledHeading>

      <StyledTitle>Get in touch</StyledTitle>

      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      <div>
      Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </div>

      <StyledEmailLink
        href="mailto:treramey@gmail.com"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <AwesomeButton type="primary">Say Hello</AwesomeButton>
      </StyledEmailLink>
    </StyledContainer>
  );
};

export default Contact;
