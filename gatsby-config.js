/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-postcss`,`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}\\src\\assets\\`,
    },
  }
],
  siteMetadata: {
    title: "JK Portfolio Web",
    description: "Little tiny web app providing CV-like info.",
    copyright: "This website is copyright 2021 @ JK",
    funnyFooter: "(Sorry for the colors, I am not a designer.)",
    infoFooter: "Click the dinosaur, to get my contact info."
  }
}
