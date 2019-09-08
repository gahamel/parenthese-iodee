const path = require('path')


module.exports = {
  siteMetadata: {
    title: "Parenthèse Iodée",
    description:
      "Votre plus beau séjour en bord de mer",
    url: "https://www.parenthese-iodee.fr", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins:[
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    }
  ]
}
