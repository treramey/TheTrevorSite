import React from "react";

import Layout from "../components/layout";
import AboutHeader from "../components/About/AboutHeader";
import AboutSubHeader from "../components/About/AboutSubHeader";
import AboutButton from "../components/About/AboutButton";

const IndexPage = () => (
  <Layout>
    <div className="about">
      <AboutHeader />
      <AboutSubHeader text="I'm a software developer and designer. Follow my daily design work on Dribbble. You can also find me on Twitter, GitHub, and LinkedIn." />
      <AboutButton text="View Projects" />
    </div>
  </Layout>
);

export default IndexPage;
