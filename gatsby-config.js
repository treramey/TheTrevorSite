/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  plugins: [
    {
      resolve:`@prismicio/gatsby-source-prismic-graphql`,
      options:{
        repositoryName:'thetrevorsite',
        pages:[{
          type:'Blog',
          match:'/blog/:uid',
          path:'/blog',
          component:require.resolve('./src/templates/blogPage.js')
        }]
      },
    },
    
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/_data/projects/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-emojis",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it. replace with yours
        trackingId: "UA-164743872-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TrevorRamey`,
        short_name: `TrevorRamey`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#381696`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-dark-mode",
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
