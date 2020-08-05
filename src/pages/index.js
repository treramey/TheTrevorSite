import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import Contact from "../components/sections/contact";
// import About from "../components/sections/about"




const IndexPage = () => {

  return (
    <Layout>
        <Hero/>
        {/* <About/> */}
        <Contact/>
    </Layout>
  );
}

export default IndexPage;