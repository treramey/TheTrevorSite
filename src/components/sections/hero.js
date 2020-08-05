import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AwesomeButton } from "react-awesome-button";
import styled from "styled-components";
import media from "../../styles/OtherStyles/media";

const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: calc(100vh - 350px );
  margin-top: 50px;
  
  /* ${media.tablet`padding-top: 150px;`}; */
  div {
    width: 100%;
  }
`;
const StyledOverline = styled.h1`
  margin: 0 0 20px 3px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  color: var(--primary-color);
  font-size: 16px;
  font-weight: bold;
  ${media.desktop`font-size: 16px;`};
  ${media.tablet`font-size: 13px;`};
`;
const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: var(--text-secondary-color);
  margin: 0px 0px 10px;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledDescription = styled.div`
  max-width: 500px;
  margin-top: 25px;
  width: 50%;
  font-size: 18px;
  ${media.desktop`font-size: 15px;`};
  ${media.tablet`font-size: 15px;`};
  ${media.phablet`font-size: 15px;`};
  ${media.phone`font-size: 15px;`};
`;
const StyledEmailLink = styled.a`
  margin-top: 50px;
`;

const Hero = ({ data }) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShowLoading(true), 1000);

      // this will clear Timeout when component unmount like in willComponentUnmount
      return () => {
        clearTimeout(timer1);
      };
    },
    [] //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  );

  const one = () => (
    <StyledOverline style={{ transitionDelay: "100ms" }}>
      Hi, my name is
    </StyledOverline>
  );
  const two = () => (
    <StyledTitle style={{ transitionDelay: "200ms" }}>
      Trevor Ramey.
    </StyledTitle>
  );
  const three = () => (
    <StyledSubtitle style={{ transitionDelay: "300ms" }}>
      I build things for the web.
    </StyledSubtitle>
  );
  const four = () => (
    <StyledDescription style={{ transitionDelay: "400ms" }}>
      I'm a software engineer based in Dallas, TX specializing in building (and
      occasionally designing) exceptional websites, applications, and everything
      in between.
    </StyledDescription>
  );
  const five = () => (
    <StyledEmailLink href="mailto:treramey@gmail.com">
      <AwesomeButton type="secondary"> Get in touch &rarr;</AwesomeButton>
    </StyledEmailLink>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledContainer>
      <StyledOverline>Hi, my name is</StyledOverline>
      <StyledTitle>Trevor Ramey.</StyledTitle>
      <StyledSubtitle>I build things for the web.</StyledSubtitle>
      <StyledDescription>
        I'm a software engineer based in Dallas, TX specializing in building
        (and occasionally designing) exceptional websites, applications, and
        everything in between.
      </StyledDescription>
      <StyledEmailLink href="mailto:treramey@gmail.com">
        <AwesomeButton type="primary"> Get in touch &rarr;</AwesomeButton>
      </StyledEmailLink>
    </StyledContainer>
  );
};

export default Hero;
