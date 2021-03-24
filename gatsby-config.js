/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-postcss`,`gatsby-transformer-sharp`, `gatsby-plugin-sharp`, `gatsby-transformer-inline-svg`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}\\src\\assets\\`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `wuu9d0fv1il2`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: 'KNvRbOxu-bu5IRFAL541lZ5x-4BADwWnqgCUHeZBAmo',
    },
  }
],
  siteMetadata: {
    title: "JK Portfolio Web",
    description: "Little tiny web app providing CV-like info.",
    copyright: "This website is copyright 2021 @ JK",
    funnyFooter: "(Sorry for the colors, I am not a designer.)",
    infoFooter: "To contact me, click the dino."
  }
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
